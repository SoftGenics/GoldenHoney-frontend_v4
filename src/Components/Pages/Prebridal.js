import React from 'react'
import { Container , Row ,Col, Card, CardImg } from 'react-bootstrap'

const Prebridal = () => {
  return (
    <>
    <div className='general-container container-fluid' style={{background:'url(images/Bridal.jpg) center center/cover no-repeat'}}>
      <div className='overlay'>
        <h1 style={{textAlign:'center' , marginTop:'5rem',textShadow:'0px 0px 3px #fff'}}>PRE BRIDAL</h1>
        
      </div>
      </div>
      <Container className='mt-5 bridal'>
          <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/manicure.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>ECONOMY</h3>
                
                    <Card.Body>
                        <p>Face Bleach/D-Tan</p>
                        <p>Glow Facial - VLCC</p>
                        <p>Full Body Wax - Honey</p>
                        <p>Manicure/Pedicure - Basic</p>
                        <p>Threading</p>
                        <p>Bridal Make Up</p>
                        <p>Price - 7999</p>
                        

                                            <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Economy Pre- Bridal"'><button className='btn btn-warning'>Book Now</button></a>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/EyeMakeup.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>PREMIUM</h3>
                
                    <Card.Body>
                      <p>Hair Cut</p>
                      <p>Hair Spa</p>
                      <p>Face Bleach/D-Tan</p>
                      <p>Lotus/Shahnaz Gold</p>
                      <p>Diamond Facial</p>
                      <p>Full Body Wax- Rica</p>
                      <p>Mani-Pedi-Crystal</p>
                      <p>Threading</p>
                      <p>Bridal Make Up</p>
                     
                        <p>PRICE - 9999</p>
                      
                        

                                            <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Premium Pre - Bridal "'><button className='btn btn-warning'>Book Now</button></a>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/Bridal.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>LUXURY</h3>
                        
                
                    <Card.Body>
                    <p>Hair Spa</p>
                      <p>Face & Hand D-Tan</p>
                      <p>O3+ Bridal Facial</p>
                      <p>Lotus/Shahnaz Gold</p>
                      <p>Meni-pedi-crystal</p>
                      <p>Full Body Wax-RICA</p>
                      <p>Full Body Polishing</p>
                      <p>Threading</p>
                      <p>Air Brush</p>
                        <p>price-15999</p>
                       
                                                  <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for luxuary pre - Bridal"'><button className='btn btn-warning'>Book Now</button></a>
            </Card.Body>
                    
                </Card>

              </Col>
              
          </Row>
          </Container>
          </>
  )
}

export default Prebridal