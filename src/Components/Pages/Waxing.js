import React from 'react'
import { Link } from 'react-router-dom'
import { Container , Row ,Col, Card, CardImg } from 'react-bootstrap'

const waxing = () => {
  return (
      <>
    <div className='general-container container-fluid' style={{background:'url(images/lw.jpg) center center/cover no-repeat'}}>
    <div className='overlay'>
      <h1 style={{textAlign:'center' , marginTop:'5rem'}}>WAXING</h1>

    </div>
    </div>
    <Container className='mt-5 haircut'>
        <Row>
            <Col md={6} xs={6}>
              <Card>
                  <CardImg src='images/lw.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                  
                      <h3>HONEY WAXING </h3>
              
                  <Card.Body>
                      
                      
                      

            <Link to='/waxing-at-golden-honey-salon'><button className='btn btn-warning'>See Menu </button></Link>
          </Card.Body>
                  
              </Card>

            </Col>
            <Col md={6} xs={6}>
              <Card>
                  <CardImg src='images/hw.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                  
                      <h3>RICA WAXING</h3>
              
                  <Card.Body>
                      
                    
                      

            <Link to='/rica-wax-at-golden-honey'><button className='btn btn-warning'>See Menu</button></Link>
          </Card.Body>
                  
              </Card>

            </Col>
            </Row>
            </Container>
            </>
    
  )
}

export default waxing