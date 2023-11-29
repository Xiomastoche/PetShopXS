import React from 'react';
import Item from './Item';
import {Container, Row} from 'react-bootstrap';


const ItemList = ({ products }) => {

  return (
    <Container fluid>
    <Row sm={2} md={3} lg={4} className="g-3">
      {products.map(prod => <Item key={prod.id} {...prod} />)}
    </Row>
    </Container>
  );
};

export default ItemList
