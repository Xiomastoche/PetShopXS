import { useState, useContext } from 'react';
import { Form, Button, Row, Col, Modal, Container } from 'react-bootstrap';
import Cart from './Cart';
import { CartContext } from '../context/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const Checkout = () => {
  const { cart, clearCart, getTotal } = useContext (CartContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const db = getFirestore();

    //generar los obj de los productos en el carrito
    const cartItems = cart.map((product)  => ({
      id: product.id,
      name: product.name,
      quantity: product.quantity,
      price: product.price,
    }));
    //generar el obj de la orden de compra
    const order = {
      buyer: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
      },
      items: cartItems,
      date: new Date().toISOString(),
      total: getTotal(),
    }

    try {
      //agregar la orden de compra a la coleccion
      const docRef = await addDoc(collection (db, 'orders'), order);
      //obtener el id del doc agregado
      const newOrderId = docRef.id;

      setOrderId(newOrderId);
      clearCart(); //limpiar el carrito dsp de realizar la compra

      setShow(true) //mostrar el modal con la orden de compra

    } catch (error) {
      console.log('Error al generar la orden de compra', error);
    }
  };


  return (
    <Container>
        <Row className='pb-5'>
            <Col md= {6} className='shadow px-4 pt-1 pb-2'>
            <h3 className='pt-2 pb-4'>Datos de contacto</h3>
            <Form onSubmit={handleSubmit}>
            <Row>
            <Form.Group as={Col} className="mb-3" controlId='firstName'>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control type='text' name='firstName' value={formData.firstName} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId='lastName'>
                <Form.Label>Apellido:</Form.Label>
                <Form.Control type='text' name='lastName' value={formData.lastName} onChange={handleInputChange} />
            </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId='email'>
                <Form.Label>Email:</Form.Label>
                <Form.Control type='email' name='email' value={formData.email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId='phone'>
                <Form.Label>Teléfono:</Form.Label>
                <Form.Control type='text' name='phone' value={formData.phone} onChange={handleInputChange} />
            </Form.Group>
            <Row>
            <Form.Group as={Col} className="mb-3" controlId='address'>
                <Form.Label>Dirección:</Form.Label>
                <Form.Control type='text' name='address' onChange={handleInputChange} />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId='postalCode'>
                <Form.Label>Código Postal:</Form.Label>
                <Form.Control type='text' name='postalCode' onChange={handleInputChange} />
            </Form.Group>
            </Row>
            <div className='d-grid'>
                <Button variant='primary' className='rounded-0 mt-3 mb-2' type='submit'>TERMINAR COMPRA</Button>
            </div>
            </Form>
            </Col>
            <Col md= {6}  style={{ backgroundColor: '#f7f7f7', borderRadius: '10px' }}>
                <Cart mostrarBotones= {false} showRemoveButton= {false}/>
            </Col>
        </Row>
        {orderId && (
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Gracias por tu compra !</Modal.Title>
          </Modal.Header>
          <Modal.Body>Tu número de orden es: {orderId}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary"  onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
        )}
    </Container>
  );
}

export default Checkout;
