import React from 'react'
import ItemCount from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ name, img, category, description, price, stock}) => {
  const [quantityAdded, setQuantityAdded] = useState (0)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
  }

  return (
    <Container className='d-flex mt-5 text-center justify-content-center mb-2'>
        <Card className='mb-4 shadow p-3 mb-5 bg-body rounded' style={{ width: '20rem' }}>
            <Card.Title className='pt-2 fs-4'>{name}</Card.Title>
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Text className="text-muted">Categoria: {category} </Card.Text>
                <Card.Text>Descripcion: {description} </Card.Text>
                <Card.Text className='fw-semibolder'>Precio: ${price} </Card.Text>
            </Card.Body>
            <Card.Footer className="text-dark">
              {
                quantityAdded > 0 ? (
                  //para que muestre 404 error x esta vez
                  <Link to='/cart' className='Option btn btn-primary'>Terminar compra</Link>
                ) : (
                  <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
              }
            </Card.Footer>
        </Card>
    </Container>
  )
}

export default ItemDetail