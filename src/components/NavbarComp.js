import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../stylesheets/navbar.css'

const NavbarComp = () => {



  return (
    <div>
        <Navbar style={{fontSize:'20px'}} fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand style={{fontSize:'25px', width:'250px'}}  as={Link} to='/'><img
              alt=""
              style={{marginTop:'12px'}}
              src={require('../assets/images/hgm-final.png')}
              width="50%"
              className="d-inline-block align-top"
            /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" style={{}}>
            <Nav pullRight className="ms-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About Us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown" menuVariant='dark'>
                <NavDropdown.Item as={Link} to='/audit'>AUDIT AND ASSURANCE</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/taxation'>TAXATION</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/accounting'>ACCOUNTING AND BUSINESS SUPPORT</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/advisory'>TRANSACTION ADVISORY</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/careers'>Careers</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavbarComp