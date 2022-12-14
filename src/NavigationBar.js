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
          <Navbar.Brand href="#home">UpperCase Convertor</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className = "navBar" href="#">Home</Nav.Link>
              <Nav.Link className = "navBar" href="#">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
