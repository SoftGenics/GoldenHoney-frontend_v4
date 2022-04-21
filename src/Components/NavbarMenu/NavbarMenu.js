import React, {useState} from 'react'
import './NavbarMenu.css'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
const NavbarMenu = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

    
  return (
    <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbarMenu' fixed='top'>
  <Container fluid>
  <Navbar.Brand as={Link} to="/"><img src='images/Logo.png' alt='logo' /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick}><i className={click ? 'fas fa-times' : 'fas fa-bars'} /></Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/"  eventKey={2} onClick={closeMobileMenu}>HOME</Nav.Link>
      <Nav.Link as={Link} to="/About-us"  eventKey={2} onClick={closeMobileMenu}>ABOUT US</Nav.Link>
      <NavDropdown title="OUR SERVICES" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/hair-cut-at-salon" eventKey={2} onClick={closeMobileMenu}>HAIRS</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/facial-at-Golden-honey"  eventKey={2} onClick={closeMobileMenu}>FACIAL & CLEAN UP</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/honey-wax-at-golden-honey-salon"  eventKey={2} onClick={closeMobileMenu}> WAXING</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/package-of-golden-honey-salon" eventKey={2} onClick={closeMobileMenu}> PACKAGE</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/manicure-pedicure-at-golden-honey" eventKey={2} onClick={closeMobileMenu}> MANICURE & PEDICURE</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/bridal-at-golden-honey" eventKey={2} onClick={closeMobileMenu}> BRIDAL</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={Link} to="/Contact-us"    eventKey={2} onClick={closeMobileMenu}>CONTACT US</Nav.Link>
      <Nav.Link as={Link} to="/Career"    eventKey={2} onClick={closeMobileMenu}>CAREER</Nav.Link>
    </Nav>
  
  </Navbar.Collapse>
  <Nav.Link href="https://www.facebook.com/Goldenhoneypatna/" ><i className="fab fa-facebook"></i></Nav.Link> 
      <Nav.Link href="https://www.instagram.com/goldenhoney_home_salon">
      <i className="fab fa-instagram"></i>
      </Nav.Link>
  </Container>
</Navbar>
    </div>
  )
}

export default NavbarMenu