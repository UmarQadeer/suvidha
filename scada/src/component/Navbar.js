import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import a from '../slider/a.png';
import "./css/Navbar.css";

export function Navbar_r() {
  return (

    <>



      <Navbar className="navbar_background" expand="lg">
        <Container>

          <Navbar.Brand as={NavLink} to="/">
            <img
              className="logo"
              src={a}
              alt="logo"
            />
            Umran Eleck
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            
              <Nav.Link as={NavLink} to="/new_conn">Apply For New Connection</Nav.Link>
              <Nav.Link as={NavLink} to="/rti">RTI</Nav.Link>

              <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
              {/* <Nav.Link as={NavLink} to="/new_conn">Apply For New Connection</Nav.Link> */}
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>








            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

