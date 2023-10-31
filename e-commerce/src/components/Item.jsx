import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Item = ({id, name, img, price, stock}) => {

  return (
    <Container className='d-flex mt-5 text-center mb-3 px-2'>
        <Card border="dark" style={{ width: '18rem' }}>
            <Card.Title className='pt-2'>{name}</Card.Title>
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Text>Precio: ${price} </Card.Text>
                <Card.Text>Stock disponible: {stock}</Card.Text>
                <Button variant="secondary" className='Option'>Ver detalle </Button>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default Item