import React from 'react'

import { Container , Row ,Col, Card, CardImg } from 'react-bootstrap'
const Bridal2 = () => {
  return (
    <>
    <div className='general-container container-fluid' style={{background:'url(images/Bridal.jpg) center center/cover no-repeat'}}>
      <div className='overlay'>
        <h1 style={{textAlign:'center' , marginTop:'5rem',textShadow:'0px 0px 3px #fff'}}>PRE BRIDAL</h1>
        
      </div>
      </div>
      <Container className='mt-5 haircut'>
          <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/mini_magick20211123-18882-18dei5c.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>BASIC</h3>
                
                    <Card.Body>
                        <p>BRIDAL Make UP</p>
                        <p>Kryloon professional</p>
                        <p>Price - 7999</p>
                        

                                            <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Basic Bridal"'><button className='btn btn-warning'>Book Now</button></a>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/mainbridal.jpeg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>AIR BRUSH</h3>
                
                    <Card.Body>
                      <p>Bridal Make Up</p>
                      <p>Kryloon professional</p>
                      <p>Mac</p>
                        <p>PRICE - 11999</p>
                      
                        

                                            <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Air Brush Bridal "'><button className='btn btn-warning'>Book Now</button></a>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/Bridal.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>HD MAKE UP</h3>
                        
                
                    <Card.Body>
                    <p>Bridal Make Up</p>
                      <p>Kryloon professional</p>
                      <p>Mac</p>
                      <p>Make up Studio</p>
                    
                        <p>price-14999</p>
                       
                                                  <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Premium - Bridal"'><button className='btn btn-warning'>Book Now</button></a>
            </Card.Body>
                    
                </Card>

              </Col>
              
          </Row>
          </Container>
          </>
  )
}

export default Bridal2