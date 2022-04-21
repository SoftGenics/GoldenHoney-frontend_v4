import React from 'react'
import './Covid.css'
import { Col, Container, Row } from 'react-bootstrap'
import {FaArrowCircleRight} from 'react-icons/fa'


export const Covid = () => {
  return (
    <>
    <div className='covid-cont'>
      <h2 className='text-center '>COVID-19 <span className='para-span' style={{color:'#be975b'}}>GUIDLINES</span></h2>
    
    <Container >
      <Row>
        
        <Col md={6}>
        
  
    <h3>SAFETY FIRST</h3>
    
    
   <p> We have taken careful measures to ensure our services and the environment we are in are carefully managed, safe and ensures the health and well-being of our beauticians. We adhere to the Ministry of Health and Bihar Health Authority's guidance to keep you and our staff safe.</p>
        
         
        
        </Col>
        
        <Col md={6}>
        
  
    <h3>SALON GUIDLINES</h3>
        
    
          <ul>
            <li> <FaArrowCircleRight/>  We sanitize every tool after each client</li>
            <li> <FaArrowCircleRight/>  We use individual disposable products for every client</li>
            <li><FaArrowCircleRight/>   Mask is always required when our beauticians visit you</li>
            <li><FaArrowCircleRight/>   Our beauticians are fully vaccinated and will maintain hygiene by washing their hands before and after the service</li>
            <li><FaArrowCircleRight/>   All clients will have their temperatures taken before our beauticians commence the service(s)</li>
          </ul>
        
    
    
    
  
        </Col>
      </Row>
    </Container>
    </div>
    </>
  )
}
export default Covid