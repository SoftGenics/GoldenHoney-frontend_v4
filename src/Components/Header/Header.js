import React from 'react'
import './Header.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
const Header = () => {
  return (
    <div>
    <Navbar  className='Header' fixed='top'>
    <Container fluid>
    <Nav className="ms-auto">
      <Nav.Link href="https://wa.me/9318818893"><img src='images/wp.png' alt='whatsapp' /> 931881 8893</Nav.Link>
    </Nav>
    </Container>
    </Navbar>
    </div>
  )
}

export default Header