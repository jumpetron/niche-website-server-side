import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'

const Navigation = () => {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img style={{ width: "150px" }} src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/explore">Explore</Nav.Link>
                <Nav.Link href="/free-demo">Free Demo</Nav.Link>
                <Nav.Link href="/support">Help Center</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link className="border-end" href="/login">
                  Login
                </Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Navigation;