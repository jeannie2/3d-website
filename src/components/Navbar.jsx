import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const NavbarComp = () => {
  return (
    <Navbar bg="black" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className="lfe">
          <img
            src="/teslalogo.svg"
            width="200"
            height="50"
            className="d-inline-block align-top pt-3"
            alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Container >
              <Nav className="small ms-auto justify-content-end">
                <Nav.Link as={NavLink} to="https://www.tesla.com//inventory/new/ms">Vehicles</Nav.Link>
                <Nav.Link as={NavLink} to="https://www.tesla.com/en_hk/utilities">Energy</Nav.Link>
                <Nav.Link as={NavLink} to="https://www.tesla.com/charging">Charging</Nav.Link>
                <Nav.Link as={NavLink} to="https://www.tesla.com/about">About</Nav.Link>
                <Nav.Link as={NavLink} to="https://shop.tesla.com">Shop</Nav.Link>
                <Nav.Link as={NavLink} to="/r3f">r3f</Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp
