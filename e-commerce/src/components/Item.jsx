import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({id, name, img, price, stock}) => {

  return (
    <Container fluid>
        <Card className='mb-4 shadow p-3 mt-5 mx-2 text-center' style={{ width: '18rem' }}>
            <Card.Title className=' fs-4'>{name}</Card.Title>
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Text className='fw-semibold fs-5 text-primary'>Precio: ${price} </Card.Text>
                <Card.Text className='text-muted'>Stock disponible: {stock}</Card.Text>
                <Link to= {`/item/${id}`} className='Option btn btn-secondary' style={{ textDecoration: 'none' }}> Ver detalle</Link>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default Item