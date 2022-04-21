import React from 'react'
import { Link } from 'react-router-dom'
import { Container , Row ,Col, Card, CardImg } from 'react-bootstrap'

const Bridal = () => {
  return (
    <>
    <div className='general-container container-fluid' style={{background:'url(images/mainbridal.jpeg) center center/cover no-repeat'}}>
    <div className='overlay'>
      <h1 style={{textAlign:'center' , marginTop:'5rem',textShadow:'0px 0px 3px #fff'}}>BRIDAL</h1>
      
    </div>
    </div>
    <Container className='mt-5'>
        <Row>
            <Col md={6} xs={6}>
              <Card>
                  <CardImg src='images/bridal1.jpeg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                  
                      <h3> BRIDAL</h3>
              
                  <Card.Body>
                      
                      
                      

            <Link to='/pre-bridal-at-golden-honey'><button className='btn btn-warning'>See Menu </button></Link>
          </Card.Body>
                  
              </Card>

            </Col>
            <Col md={6} xs={6}>
              <Card>
                  <CardImg src='images/pb.jpeg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                  
                      <h3> PRE BRIDAL</h3>
              
                  <Card.Body>
                      
                    
                      

            <Link to='/bridal-makeup-at-golden-salon'><button className='btn btn-warning'>See Menu</button></Link>
          </Card.Body>
                  
              </Card>

            </Col>
            </Row>

            </Container>
            </>
  )
}

export default Bridal