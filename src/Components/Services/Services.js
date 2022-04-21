import React from 'react'
import './Service.css'
import { Link } from 'react-router-dom'
import { Row, Col, Container, Card } from 'react-bootstrap'
export const Services = () => {
  return (
    <div id="services">
      <Container className='service'>
        <h2 className='text-center'> our <span>services</span></h2>
        <Row>
          <Col xs={6}>
          <Card>
          <Card.Img src='images/saloon2.jpg'  />
          <div className="card-img-overlay text-black">
              <h5 className="card-title">Hair</h5>
            </div>
            <Card.Body>
              <Link to='/hair-cut-at-salon'><button className='btn btn-warning'>see menu</button></Link>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={6}>
          <Card>
          <Card.Img src='images/saloon3.jpg'  />
          <div className="card-img-overlay text-black">
              <h5 className="card-title">Facial & Clean up</h5>
            </div>
            <Card.Body>
            <Link to='/facial-at-Golden-honey'><button className='btn btn-warning'>see menu</button></Link>
            </Card.Body>
          </Card>
          </Col>
          </Row>
          <Row>
          <Col xs={6}>
          <Card>
          <Card.Img src='images/waxing.jpg' />
          <div className="card-img-overlay text-black">
              <h5 className="card-title">Waxing</h5>
            </div>
            <Card.Body>
            <Link to='/honey-wax-at-golden-honey-salon'><button className='btn btn-warning'>see menu</button></Link>
            </Card.Body>
          </Card>
          </Col>
       
   
          <Col xs={6}>
          <Card>
          <Card.Img src='images/pack.jpeg' />
          <div className="card-img-overlay text-white">
              <h5 className="card-title">Package</h5>
            </div>
            <Card.Body>
            <Link to='/package-of-golden-honey-salon'><button className='btn btn-warning'>see menu</button></Link>
            </Card.Body>
          </Card>
          </Col>
          </Row>
          <Row>
          <Col xs={6}>
          <Card>
          <Card.Img src='images/manicure.jpg'  />
          <div className="card-img-overlay text-white">
              <h5 className="card-title">Manicure & Pedicure</h5>
            </div>
            <Card.Body>
            <Link to='/manicure-pedicure-at-golden-honey'><button className='btn btn-warning'>see menu</button></Link>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={6}>
          <Card>
            <Card.Img src='images/Bridal.jpg' />
            <div className="card-img-overlay text-white">
              <h5 className="card-title">Bridal</h5>
            </div>
            <Card.Body>
              <Link to='/bridal-at-golden-honey'><button className='btn btn-warning'>see menu</button></Link>
            </Card.Body>  
          </Card>
          </Col>
          </Row>
      </Container>
    </div>
  )
}
