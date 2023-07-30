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
        {/* <svg  viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="white"/></svg> */}
{/* Tesla */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Container >
          <Nav className="small ms-auto justify-content-end">
            {/* <Nav.Link as={NavLink} to="/bookmarked">Bookmarked products</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link> */}

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

//
