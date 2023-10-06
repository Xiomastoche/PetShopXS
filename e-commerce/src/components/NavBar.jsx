import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../img/logoveg.png';
import carrito from '../img/shop.png';

const NavBar = () => {

  return (
    <>
        <Navbar expand="md" sticky="top" bg="warning" data-bs-theme="primary">
        <Container fluid>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="100"
              className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Nav className="justify-content-center fw-bolder">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Productos</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
            <a href="#">
            <img
              alt=""
              src={carrito}
              width="40"
              className="img-fluid"
            />
            </a>
            
        </Nav>
        </Container>
      </Navbar>
    </> 
  )
}

export default NavBar;