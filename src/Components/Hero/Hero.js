import React from 'react'
import './Hero.css'
import { Carousel } from 'react-bootstrap'
const Hero = () => {
  return (
 <div className='hero'>
<Carousel fade>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="images/EyeMakeup.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>BRIDAL MAKEUP</h1>
      <a href='#services'><button className='book-btn'>Book Now</button></a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="images/hair-salon.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>HAIR</h1>
      <a href='#services'><button className='book-btn'>Book Now</button></a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="images/Waxings.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>WAXING</h1>
      
      <a href='#services'><button className='book-btn'>Book Now</button></a>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Hero