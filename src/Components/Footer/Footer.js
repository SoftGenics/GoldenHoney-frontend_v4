import React from 'react'
import './Footer.css'
import { Container,Row ,Col } from "react-bootstrap";
import {FaFacebook ,  FaWhatsapp, FaPhoneAlt, FaEnvelopeOpenText} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <div className="margin-div">
    <section >
    <footer className="completeFooter  text-center">
      <Container>
        <Row>
        <Col md={3}>
  
            <img src='images/logo.png' alt='' style={{height:'100px' , width:'150px' , marginTop:'0'}}></img>
  
            <p className="AboutSoftgenics">
            "No 1 "Home Salon Service in Patna, Professional Beauticians, Genuine products and Best rates guaranteed."
            </p>
            
            </Col>
            <Col md={3}>
          
            <h4 className="OurOffices">QUICK LINKS
            </h4>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Our Services</li>
              <li>contact</li>
              <li>Privacy Policy</li>
            </ul>
  
           
          
          </Col>
  
          <Col md={3}>
            <h4 className=" mb-0 OurOffices text-center">CONTACT</h4>
       
              <ul className="list-unstyled">
              
              
              <li>
             <p><a href="tel:9318818893" className="cont"><FaPhoneAlt/> 93188 18893</a></p>
              </li>
              <li>
            <p><a href="https://www.goldenhoneysalon.com" className="cont"><FaEnvelopeOpenText/> &nbsp;www.goldenhoneysalon.com</a></p>
              </li>
              
            
                     </ul>
  
                
            </Col> 
             <Col md={3}>
              <h4 className="OurOffices">Follow and share</h4>
              <div className='foot-saloon-img'>
              <img src='images/saloon3.jpg' alt='#' className="foot-img"></img>
              <img src='images/saloon4.jpg' alt='#' className="foot-img"></img>
              <img src='images/saloon2.jpg' alt='#' className="foot-img"></img>
              </div>
              <div className="social-foot">
              <a href='https://www.facebook.com/Goldenhoneypatna/'  className="s-img"> <FaFacebook/></a>
      
              <a href='https://wa.me/919381818893'><FaWhatsapp/></a>
              <a href="https://www.instagram.com/goldenhoney_home_salon" className="s-img"><BsInstagram /></a>
              </div>
              </Col>
         
              <div className="text-center p-3 copyright">
        © 2022 designed by:
        <a className="text-black ml-2" href="https://softgenics.in">SoftGenics</a>
      </div>
      </Row>
      </Container>
    </footer>
  </section>
    </div>
  )
}

export default Footer