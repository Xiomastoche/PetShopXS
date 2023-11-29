import {Card, Container, Row, Col, Alert } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = ({mostrarBotones = true, showRemoveButton = true}) => {
  const { cart, removeItem, getTotal } = useContext(CartContext);

  
  return (
    <>
        <Container className='pt-3 pb-4'>
            <div className='mx-0'>
            <h3 className='pb-2'>Carrito de compras</h3>
          {cart.length === 0 ? (
            <>
            <Alert variant='success border border-0 rounded-0 mt-4'>El carrito de compras está vacío.</Alert>
            <Link to={'/'} className='Option btn btn-secondary rounded-0 mt-4'>Volver a la tienda</Link>
            </>
          ) : (
            <>
            <p className='pb-3 px-1'>Tenes {cart.length} productos en tu carrito. </p>
            {cart.map((product) => (
            <Card key={product.id} className='card mb-3 text-center p-2 shadow'>
                <Row className='g-0'>
                    <Col> <img src={product.img} alt={product.name} width={100} /></Col>
                    <Col> 
                        <Card.Body>
                            <Card.Title> {product.name} </Card.Title>
                        </Card.Body>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Text className='fs-5'> {product.quantity} </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Text className='fs-5'> ${product.price} </Card.Text>
                        </Card.Body>
                    </Col>
                    {showRemoveButton && (
                        <Col>
                        <button className='btn btn-danger rounded-0 mt-3' onClick={() => removeItem(product.id)}>
                            X
                        </button>
                        </Col>
                    )}
                    
                </Row>
            </Card>
          ))}
            <Row>
                <h4 className='pt-4 text-end'> Total: ${getTotal()} </h4>
            </Row>
            {mostrarBotones && (
                <Row>
                    <Col className='pt-4 pb-5 text-end'>
                        <div className='buttons-container'>
                        <Link to='/' className='Option btn btn-secondary rounded-0 mx-3'>Volver al listado</Link>
                        <Link to='/Checkout' className='Option btn btn-primary rounded-0'>Checkout</Link>
                        </div>
                    </Col>
              </Row>
            )}
          </>
          )}
          </div>
        </Container>
    </>
  );
};

export default Cart;
