import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Logo from './logo.png'

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Form
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
