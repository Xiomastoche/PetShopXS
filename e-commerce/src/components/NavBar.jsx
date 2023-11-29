import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import logo from '../img/logoT.png';


const NavBar = () => {

  return (
    <>
        <Navbar expand="md" sticky="top" bg="secondary" className='mb-5'>
        <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Link to='/'>
            <img
              alt="logo"
              src={logo}
              width="180"
              className="d-inline-block mx-2 "
            /> 
        </Link>
        
        <Navbar.Collapse className='px-3 fw-bolder justify-content-end' id="responsive-navbar-nav">
          <Link to='/' className='px-4' style={{ textDecoration: 'none', color: 'inherit'}} > Inicio</Link>
          <Nav>
            <NavDropdown title="Productos" id="collapsible-nav-dropdown" style={{ textDecoration: 'none', color: 'inherit'}}>
              <NavDropdown.Item >
                <NavLink to={`/category/celular`} style={{ textDecoration: 'none', color: 'inherit'}} className={({ isActive}) => isActive ? 'ActiveOption': 'Option'} > Celulares </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <NavLink to={`/category/audio`} style={{ textDecoration: 'none', color: 'inherit'}} className={({ isActive}) => isActive ? 'ActiveOption': 'Option'} > Audio </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <NavLink to={`/category/tablet`} style={{ textDecoration: 'none', color: 'inherit' }} className={({ isActive}) => isActive ? 'ActiveOption': 'Option'} > Tablets </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <NavLink to={`/category/notebook`} style={{ textDecoration: 'none', color: 'inherit' }} className={({ isActive}) => isActive ? 'ActiveOption': 'Option'} > Notebooks </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to={`/`} style={{ textDecoration: 'none', color: 'inherit', marginRight: '10px' }} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} > Todos los productos </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav className='justify-content-end'>
          <CartWidget />
        </Nav>
        </Container>
      </Navbar>
    </> 
  )
}

export default NavBar;