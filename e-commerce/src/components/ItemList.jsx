import React from 'react';
import Item from './Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const ItemList = ({ products }) => {

  return (
    <Container fluid>
    <Row xs={1} md={2} lg={4} className="g-2">
      {products.map(prod => <Item key={prod.id} {...prod} />)}
    </Row>
    </Container>
  );
};

export default ItemList
