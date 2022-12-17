import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Mean-Stack</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="mx-3" to="/">
                {" "}
                <p>Sign Up</p>
              </Link>
              <Link className="mx-3" to="/login">
                {" "}
                <p>Login</p>
              </Link>
              <Link className="mx-3" to="/post">
                {" "}
                <p>Create Post</p>
              </Link>
              <Link className="mx-3" to="/displaypost">
                {" "}
                <p>View Post</p>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
