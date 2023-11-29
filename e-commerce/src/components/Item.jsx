import React from 'react'
import {Container, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Item = ({id, name, img, price, stock}) => {

  return (
    <Container fluid>
        <Card className='shadow p-3 mx-2 text-center mb-4' style={{ maxWidth: '18rem' }}>
            <Card.Title>{name}</Card.Title>
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Text className='fw-semibold fs-5 text-primary'>${price} </Card.Text>
                <Card.Text className='text-muted pb-2'>Stock disponible: {stock}</Card.Text>
                <Link to= {`/item/${id}`} className='Option btn btn-secondary' style={{ textDecoration: 'none' }}> Ver detalle</Link>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default Item