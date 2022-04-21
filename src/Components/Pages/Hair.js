import React from 'react'

import { Card, Col, Container,Row  ,CardImg  } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

const Hair = () => {
  return (
    <>
    <div className='general-container container-fluid' style={{background:'url(images/haircut.jpg) center center/cover no-repeat'}}>
      <div className='overlay'>
        <h1 style={{textAlign:'center' , marginTop:'5rem'}}>BEST HAIR HOME SERVICES</h1>
       
      </div>
      </div>
      <Container className='mt-5 haircut'>
          <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/hair1.AVIF' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Haircuts</h3>
                
                    <Card.Body>
                        <p>PRICE - 199</p>
                        <p>Haircut-U Shape, V Shape & Straight</p>
                        

              <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Haircut"'><button className='btn btn-warning'>Book Now</button></a>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/hair1.AVIF' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Haircuts</h3>
                
                    <Card.Body>
                        <p>PRICE - 299</p>
                        <p>Haircut-Layer, Razor , Multi-Step , 3-Step and blunt Cut</p>
                        

                        <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Haircut"'><button className='btn btn-warning'>Book Now</button></a>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/spa.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>HAIR SPA</h3>
                        <h5>Keratin Nutrition Treatment Hair Spa</h5>
                
                    <Card.Body>
                        <p>price-399 (S)</p>
                        <p>price-499 (M)</p> 
                        <p>price-599 (L)</p>                        
                    
                                            <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Haircolour"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/spa.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px' , alignItems:'center'}}/>
                    
                        <h3>HAIR SPA</h3>
                        <h5>L'Oreal Hair Spa</h5>
                
                    <Card.Body>
                        <p>price-499 (S)</p>
                        <p>price-699 (M)</p> 
                        <p>price-799 (L)</p>   
                    
                        <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Hairspa"'><button className='btn btn-warning'>Book Now</button></a>
            </Card.Body>
                    
                </Card>

              </Col>
          </Row>
          <Row>
          <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/haircolor.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Hair Colour </h3>
                        <h5>Streax Professional</h5>
                    <Card.Body>
                    <p>price-799 (S)</p>
                        <p>price-999 (M)</p> 
                        <p>price-1199 (L)</p>  
                        <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Haircolour"'><button className='btn btn-warning'>Book Now</button></a>
            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              
              <Card>
                    <CardImg src='images/haircolor.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Hair Colour </h3>
                        <h5> Matrix Professional</h5>
                
                    <Card.Body>
                       
                        <p>price-849 (S)</p>
                        <p>price-1049 (M)</p> 
                        <p>price-1249 (L)</p>  
                        <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Haircolour Matrix Professional"'><button className='btn btn-warning'>Book Now</button></a>
            </Card.Body>
                    
                </Card>
                </Col>

              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/haircolor.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Hair Colour </h3>
                        <h5>Global Colouring (L'Oreal Majirel)</h5>
                    <Card.Body>
                    <p>price-999 (S)</p>
                        <p>price-1299 (M)</p> 
                        <p>price-1599 (L)</p>  
                        <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Haircolour"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/haircolor.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Hair Colour </h3>
                        <h5>Global Colouring (L'Oreal INOA)</h5>
                    <Card.Body>
                    <p>price-1199 (S)</p>
                        <p>price-1599 (M)</p> 
                        <p>price-1799 (L)</p>  
                        <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Haircolour"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>

              </Col>

          </Row>
          <Row>
          <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/hi.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Hair Colour - Root Touch Up </h3>
                        <h5>Streax Professional</h5>
                    <Card.Body>
                    <p>price-499</p>  
                    <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Haircolour"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              
              <Card>
                    <CardImg src='images/hi.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Hair Colour - Root Touch Up </h3>
                        <h5> Matrix Professional</h5>
                
                    <Card.Body>
                       
                    <p>price-549</p>    
                    <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Haircolour"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>
                </Col>

              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/hi.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Hair Colour  </h3>
                        <h5>Root Touch Up (L'Oreal Majirel)</h5>
                    <Card.Body>
                    <p>price-649</p>    
                    <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Haircolour"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/hi.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Hair Colour </h3>
                        <h5>Root Touch Up(L'Oreal INOA)</h5>
                    <Card.Body>
                    <p>price-799</p>    
                    <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Haircolour"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>

              </Col>

          </Row>
          <Row>
          <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/hi.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Hair Highlight (per strip)</h3>
                        <h5>Blonde/Brown Shade</h5>
                    <Card.Body>
                    <p>price-499</p>  
                                            <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Hair Highlight"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              
              <Card>
                    <CardImg src='images/hi.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Hair Highlight (per strip) </h3>
                        <h5> Fashion Shade</h5>
                
                    <Card.Body>
                       
                    <p>price-349</p>    
                                            <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Hairhighlight"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>
                </Col>

              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/hi.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Hair Highlight  </h3>
                        <h5>Global Highlights (M)</h5>
                    <Card.Body>
                    <p>price-3499</p>    
                                            <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Hair Highlight"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/hi.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Hair Highlight </h3>
                        <h5>Global Highlight(L)</h5>
                    <Card.Body>
                    <p>price-4499</p>    
                                            <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Hair highlight"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>

              </Col>

          </Row>
          <Row>
          <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/rebond.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Hair Rebonding</h3>
                        
                    <Card.Body>
                    <p>price-2999 (M)</p> 
                    <p>price-3999 (L)</p>  
                                            <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Hair rebonding"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              
              <Card>
                    <CardImg src='images/rebond.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Hair Smoothening </h3>
                       
                
                    <Card.Body>
                     <p>price-2999 (M)</p> 
                    <p>price-3999 (L)</p>
                                            <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for hair rebonding"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>
                </Col>

              <Col md={3} xs={6}>
              <Card>
                    <CardImg src='images/rebond.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Keratin Treatment  </h3>
                        <h5>Medium Hair Length</h5>
                    <Card.Body>
                    <p>price-4999</p>    
                                            <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Keratin treatment"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>

              </Col>
              <Col md={3} xs={6}>
              <Card  >
                    <CardImg src='images/rebond.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>Keratin Treatment </h3>
                        <h5>Large Hair Length</h5>
                    <Card.Body>
                    <p>price-6299</p>    
                                            <a href='https://wa.me/+919112911256?text=Hi%27, golden honey salon, I would like you to book for Keratin Treatment"'><button className='btn btn-warning'>Book Now</button></a>

            </Card.Body>
                    
                </Card>

              </Col>

          </Row>
          
      </Container>
      <Footer/>

    </>
  )
}

export default Hair;