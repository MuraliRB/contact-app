import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="/">Contact Manager</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
