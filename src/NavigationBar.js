import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

function NavigationBar(props) {
  return (
    <>
    <style type="text/css">
        {`
    .navBar{
      background-color: purple;
      color: white;
    }

    `}
      </style>
      <Navbar className = "navBar"  expand="lg">
        <Container className="">
          <Navbar.Brand href="#home">
          <img
              alt=""
              src="/logo.png"
              width="160"
              height="30"
              className="d-inline-block align-top py-0"
            /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className = "navBar text-light" href="#">Home</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
