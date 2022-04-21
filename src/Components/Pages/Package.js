import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Container,Row  ,CardImg  } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

const Package = () => {
  return (
    <>
    <div className='general-container container-fluid'style={{background:'url(images/pkg.jpg) center center/cover no-repeat'}}>
      <div className='overlay'>
        <h1 style={{textAlign:'center' , marginTop:'5rem', textShadow:'0px 0px 3px #fff'}}>BEST HOME SERVICES</h1>
       
      </div>
      </div>
      <Container className='mt-5 package'>
      <Row>
              <Col md={4}>
                <Card>
                    <CardImg src='images/cleanup.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Economy Package</h3>
                
                    <Card.Body>
                        <ul>
                            <li>Full Face & Neck Bleach</li>
                            <li>Threading (Eyebrow+ Upper lips+ Forehead) </li>
                            <li>Basic Clean Up</li>
                            <li>Full Hand Waxing(Honey)</li>
                        </ul>
                        <p>Price-799</p>
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={4}>
                <Card>
                    <CardImg src='images/bl.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Economy Package</h3>
                
                    <Card.Body>
                        <ul>
                            <li>Full face & Neck D-Tan</li>
                            <li>Full Hand Waxing (Honey)</li>
                            <li>Half Leg  Waxing (Honey)</li>
                            <li>Under Arm Waxing (Honey)</li>
                            <li>Threading (Eyebrow+ Upper lips+ Forehead)</li>
                            <li>Fruit Facial (lotus/Shahnaz/Aroma Magic)</li>
                           
                        </ul>
                        
                        <p>PRICE - 1199</p>
                        

                        <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Economy Package"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={4}>
              <Card>
                    <CardImg src='images/fb.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Economy Package</h3>
                        
                
                    <Card.Body>
                        
                    <ul>
                            <li>Full face & Neck D-Tan</li>
                            <li>Full Hand Waxing (Honey)</li>
                            <li>Full Leg  Waxing (Honey)</li>
                            <li>Under Arm Waxing (Honey)</li>
                            <li>Half Back D-Tan</li>
                            <li>Threading (Eyebrow+ Upper lips+ Forehead)</li>
                            <li>Lotus Whitening Facial</li>
                            <li>Pedicure</li>
                           
                        </ul>
                        <p>price-1999</p>
                        <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Economy Package"'><button className='btn btn-warning'>Book Now</button></a>
                       
            </Card.Body>
                    
                </Card>

              </Col>
              </Row>
          <Row>
              <Col md={4}>
                <Card>
                    <CardImg src='images/d.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Economy Package</h3>
                
                    <Card.Body>
                        <ul>
                            <li>Hair Cut</li>
                            <li>Threading (Eyebrow+ Upper lips+ Forehead) </li>
                            <li>Basic Clean Up</li>
                            <li>D-Tan (Ozone)</li>
                        </ul>
                        <p>Price-999</p>
                        

              <Link to='/'><button className='btn btn-warning'>Add to cart</button></Link>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={4}>
                <Card>
                    <CardImg src='images/hair1.AVIF' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>All in One Basic</h3>
                
                    <Card.Body>
                        <ul>
                            <li>Hair Cut (Basic)</li>
                            <li>Hair Spa (M)</li>
                            <li>Threading (Eyebrow+ Upper lips+ Forehead)</li>
                            <li>Basic Facial (lotus/Shahnaz/Aroma Magic)</li>
                            <li>Face D-Tan</li>
                            <li>Half Leg + Half Hand Wax (Honey Wax</li>
                        </ul>
                        
                        <p>PRICE - 1999</p>
                        

                        <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for All in One Basic"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={4}>
              <Card>
                    <CardImg src='images/spa.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>All in One Premium </h3>
                        
                
                    <Card.Body>
                        <ul>
                        <li>Hair Cut (Basic)</li>
                        <li>Head Massage</li>
                        <li>Threading (Eyebrow+ Upper lips+ Forehead)        </li>                                          
<li>Any Advance Facial</li>
<li>	D-Tan (O3+)</li>
<li>Half Leg + Half Hand Wax + Under Arms (RICA)</li>
                        </ul>
                        <p>price-2999</p>
                        <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for All in one Premium"'><button className='btn btn-warning'>Book Now</button></a>
                       
            </Card.Body>
                    
                </Card>

              </Col>
              </Row>
              </Container>
              <Footer />
</>
  )
}

export default Package