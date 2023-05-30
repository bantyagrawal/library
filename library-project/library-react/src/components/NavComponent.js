import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavComponent = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" variant="tabs">
            <Nav.Link
              as={NavLink}
              to="/"
              active={isActive('/')}
              style={{ color: isActive('/') ? 'blue' : '' }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/login"
              active={isActive('/login')}
              style={{ color: isActive('/login') ? 'blue' : '' }}
            >
              Login
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/signup"
              active={isActive('/signup')}
              style={{ color: isActive('/signup') ? 'blue' : '' }}
            >
              Signup
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/book"
              active={isActive('/book')}
              style={{ color: isActive('/book') ? 'blue' : '' }}
            >
              Book
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/issuedbook"
              active={isActive('/issuedbook')}
              style={{ color: isActive('/issuedbook') ? 'blue' : '' }}
            >
              Issued Book
            </Nav.Link>
            <NavDropdown title="Admin" id="nav-dropdown">
              <NavDropdown.Item >
                <Nav.Link
                  as={NavLink}
                  to="/adminlogin"
                  active={isActive('/adminlogin')}
                  style={{ color: isActive('/adminlogin') ? 'blue' : '' }}
                >
                  Admin Login
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item ></NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3"><Nav.Link
                  as={NavLink}
                  to="/allusers"
                  active={isActive('/allusers')}
                  style={{ color: isActive('/allusers') ? 'blue' : '' }}
                >
                  Users
                </Nav.Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavComponent;
