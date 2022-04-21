import React from 'react'
import './Offer.css'
import { Card, Container, Row , Col} from 'react-bootstrap'

const Offer = () => {
  return (
    <div>
      <Container className='offer'>
        <h2 className='text-center mt-5 mb-5'>WHAT WE <span>OFFER ?</span></h2>
        <Row>
          <Col xs={6}>
            <Card>
              <Card.Img src='images/FacialOffer.png' />
            </Card>
          </Col>
          <Col xs={6}>
            <Card>
              <Card.Img src='images/keratin.jpeg' />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Card>
              <Card.Img src='images/Bikniwaxfree.png' />
            </Card>
          </Col>
          <Col xs={6}>
            <Card>
              <Card.Img src='images/MainicureFree.png' />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Offer