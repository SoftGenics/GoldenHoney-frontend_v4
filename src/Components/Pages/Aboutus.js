import React from 'react'
import { Col, Container, Row, Image, Card } from 'react-bootstrap'
import './Aboutus.css'
import Footer from '../Footer/Footer'
const Aboutus = () => {
  return (
    <div>
      <Container className='about'>
        <h1 className='text-center mb-3'>ABOUT US</h1>
        <Row>
          <Col md={4} className='col-first'>
            <Image src='images/Logo.png' alt='logo'/>
          </Col>
          <Col md={8} className='col-sec'>
            <Card>
              <Card.Body>
                <Card.Text>
                We are a luxury home-services salon in Patna serving all your beauty needs from the comfort of your home. 
Golden Honey started in year 2015. After successful delivering 5000+ Happy client now we have come online supported beauty salon which delivers services at the doorstep of customers on advance booking. 
We offer a wide range of services from Facial, Waxing, Hair Spa, Rebounding, Keratin Treatments, Hair Colouring, Hair Extensions, manicures, pedicures, massages, hair styling, waxing, threading at last experts in Make-up. Bridal Make up, Party Make ups etc. 
At GOLDEN HONEY, we believe the best love and care for your soul should be provided in the comfort of your home (or anywhere in Patna, Bihar you desire) and we shall bring to you the luxury treatment you deserve.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Aboutus