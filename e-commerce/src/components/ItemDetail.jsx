import React from 'react'
import ItemCount from './ItemCount'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ name, img, category, description, price, stock}) => {
  return (
    <Container className='d-flex mt-5 text-center mb-3 px-2'>
        <Card border="dark" style={{ width: '18rem' }}>
            <Card.Title className='pt-2'>{name}</Card.Title>
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Text>Categoria: {category} </Card.Text>
                <Card.Text>Descripcion: {description} </Card.Text>
                <Card.Text>Precio: ${price} </Card.Text>
            </Card.Body>
            <Card.Footer className="text-dark">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
            </Card.Footer>
        </Card>
    </Container>
  )
}

export default ItemDetail