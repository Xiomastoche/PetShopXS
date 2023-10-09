import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';


const ItemListContainer = (props) => {
  return (
    <Container>
        <h2 className='pt-4'>{props.mensaje}</h2>
    </Container>
  )
}

export default ItemListContainer