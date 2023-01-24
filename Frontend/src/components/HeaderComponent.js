import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Badge,Form,DropdownButton,Dropdown, Button, InputGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const HeaderComponent=()=>{

    
    
      return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
                <Navbar.Brand href="/">BEST ONLINE SHOP</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <InputGroup>
                    <DropdownButton id="dropdown-basic-button" title="All">
                        <Dropdown.Item>Electronics</Dropdown.Item>
                        <Dropdown.Item>Books</Dropdown.Item>
                        <Dropdown.Item>Fashion</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control type="text" placeholder="Search in shop ..." />
                    <Button variant="warning">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </Button>
                </InputGroup>
                </Nav>
                <Nav>
                <LinkContainer to="/admin/orders"><Nav.Link>Admin</Nav.Link></LinkContainer>
                
                <NavDropdown title="Syed Ali Aatif" id="collasible-nav-dropdown">

                  <NavDropdown.Item eventKey="/user/my-orders" as={Link} to="/user/my-orders">Orders</NavDropdown.Item>
                  <NavDropdown.Item eventKey="/user" as={Link} to="/user">Profile</NavDropdown.Item>
                  <NavDropdown.Item>Logout</NavDropdown.Item>
                  
                </NavDropdown>
                <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
                <LinkContainer to="/register"><Nav.Link>Register</Nav.Link></LinkContainer>
                <Nav.Link href="#pricing"><Badge bg="danger">2</Badge>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>CART
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
export default HeaderComponent; 