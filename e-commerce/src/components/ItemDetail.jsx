import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';


const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
  const [quantityAdded, setQuantityAdded] = useState (0);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setShowSpinner(true);

    // Simulación de una llamada a una API para agregar el producto al carrito
    setTimeout(() => {
      addItem({ id, name, price, img }, quantity);
      setQuantityAdded(quantity);
      setShowSpinner(false);
      setShowConfirmation(true);
    }, 2000); // Simular una demora de 2 segundos
  };

  return (
    <Container>
        <Row className='pt-4 pb-5'>
          <Col>
            <img src={img} alt={name} width='400px' className='border img-fluid' />
          </Col>
          <Col className='pt-2'>
            <h3> {name} </h3>
            <p className='text-muted'>Categoria: {category} </p>
            <p className='pt-3'> Descripción: {description} </p>
            <p className='fs-3 pt-4 pb-3'> ${price} </p>

            {showConfirmation ? (
                <>
                  <Alert variant='success mt-1 border border-0'>Producto agregado al carrito!</Alert>
                  <Link to='/Cart' className='Option btn btn-primary rounded-0'>
                    Comprar
                  </Link>
                  <Link to='/' className='Option btn btn-secondary rounded-0 mx-2'>
                    Seguir comprando
                  </Link>
                </>
              ) : (
                <>
                  {showSpinner ? (
                    <Spinner animation='border' role='status'>
                      <span className='visually-hidden'>Cargando...</span>
                    </Spinner>
                  ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                  )}
                </>
              )}
          </Col>
            
        </Row>
    </Container>
  )
}

export default ItemDetail