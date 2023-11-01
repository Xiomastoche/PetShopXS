import React from 'react';
import Item from './Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const ItemList = ({ products }) => {

  return (
    <Container>
    <Row xs={1} md={2} lg={3} className="g-3">
      {products.map(prod => <Item key={prod.id} {...prod} />)}
    </Row>
    </Container>
  );
};

export default ItemList
