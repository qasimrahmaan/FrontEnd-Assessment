import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const NavbarComponent: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Frontend Assessment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to='/list-tasks' style={{color: 'black'}}>TaskList</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/create-task' style={{color: 'black'}}>CreateTask</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/bulk-Delete' style={{color: 'black'}}>BulkDelete</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

      // <Link to="/list-tasks">TaskList</Link>
      //       <Link to="/create-task">TaskList</Link>
      //       <Link to="/bulk-Delete">TaskList</Link>