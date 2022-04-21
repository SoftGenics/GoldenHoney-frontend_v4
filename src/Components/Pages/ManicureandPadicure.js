import React from 'react'

import { Container , Row ,Col, Card, CardImg } from 'react-bootstrap'


const ManicureandPadicure = () => {
  return (
    <>
    <div className='general-container container-fluid' style={{background:'url(images/manicure.jpg) center center/cover no-repeat'}}>
      <div className='overlay'>
        <h1 style={{textAlign:'center' , marginTop:'5rem',textShadow:'0px 0px 3px #fff'}}>MANICURE & PEDICURE</h1>
        
      </div>
      </div>
      <Container className='mt-5 haircut'>
          <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/manicure.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Manicure  </h3>
                
                    <Card.Body>
                        <p>PRICE - 249</p>
                        
                        

                        <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for manicure"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/manicure.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Manicure - Crystal</h3>
                
                    <Card.Body>
                        <p>PRICE - 499</p>
                      
                        

                        <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for manicure - Crystal"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/manicure.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Pedicure</h3>
                        
                
                    <Card.Body>
                        <p>price-399</p>
                        <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for pedicure"'><button className='btn btn-warning'>Book Now</button></a>
                       
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/manicure.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px' , alignItems:'center'}}/>
                    
                        <h3>Pedicure - Crystal </h3>
                                       
                    <Card.Body>
                        <p>price-649</p>
                           
                        <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for pedicure - Crystal"'><button className='btn btn-warning'>Book Now</button></a>
                    
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3}>
              <Card>
                    <CardImg src='images/manicure.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px' , alignItems:'center'}}/>
                    
                        <h3>Nails Cut & Polish </h3>
                                       
                    <Card.Body>
                        <p>price-149</p>
                           
                        <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for nail Cut & polish"'><button className='btn btn-warning'>Book Now</button></a>
                    
            </Card.Body>
                    
                </Card>

              </Col>
          </Row>
          </Container>
          </>
  )
}

export default ManicureandPadicure