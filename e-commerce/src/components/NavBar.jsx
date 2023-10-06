import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

import logo from '../img/logoveg.png';
import carrito from '../img/shop.png';

const NavBar = () => {

  return (
    <>
        <Navbar expand="md" sticky="top" bg="warning" data-bs-theme="primary">
        <Container fluid>
        <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={logo}
              width="100"
              className="d-inline-bl ock mx-2"
            />
        </Navbar.Brand>
        <Nav className="justify-content-end fw-bolder" id="responsive-navbar-nav">
          <Nav.Link className='px-3' href="#">Inicio</Nav.Link>
          <Nav.Link className='px-3' href="#">Productos</Nav.Link>
          <Nav.Link className='px-3' href="#">Contacto</Nav.Link>
          <Nav className='px-3 border-start border-dark'>
            <a href="#">
            <img
              alt="carrito"
              src={carrito}
              width="40"
              className="img-fluid"
            />
            </a>
            <CartWidget />
          </Nav>
        </Nav>
        </Container>
      </Navbar>
    </> 
  )
}

export default NavBar;