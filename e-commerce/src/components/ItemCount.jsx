import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }

  return (
    <Container className='Counter text-center'>
    <Row className='Controls pb-1'>
        <Col> <Button variant='secondary px-3' onClick={decrement}> - </Button></Col>
        <Col> <h4 className='Number'> {quantity} </h4></Col>
        <Col> <Button variant='secondary px-3' onClick={increment}> + </Button></Col>
    </Row>
    <Row>
        <Col>
            <Button variant='success px-5' onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al carrito
            </Button>
        </Col>
    </Row>
    </Container>
  )
}

export default ItemCount