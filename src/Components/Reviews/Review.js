import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Review.css'
import { Card, Container } from 'react-bootstrap';
const Review = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }; 
  return (
    <div>
        <Container className='review' fluid>'
        <h2><img src="images/google.png" alt='google' style={{width:'40px', height:'40px'}} /> REVIEWS & <span>RATING</span></h2>
        
        <div className='rating'>
        
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star-half' />
                        <span className='text-muted h4'>4.6/5</span>
                    </div>
                    <br></br>
        <Carousel responsive={responsive}>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Sunita Kumari <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text>Golden Honey service is awesome and there beautician reached on time. Beautician Meena Sinha ka work is excellent and her nature is very good... I am very much impressed with *Golden Honey* services...  Every one just go for it...... </Card.Text>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Ranjan Singh <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text>I am very happy with services given by Golden Honey Salon. Beautician are professional and experienced. Rates are also very genuine, professional products are being used. </Card.Text>
    
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Chris Mill <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text>This salon is one of best kind. I've had best service. The behavior of the staff was amazing and well mannered. </Card.Text>
                    <br></br>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Sales Team <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text>Professional beautician, genuine products are being used and main thing it's pocket friendly. Now I will not go salon. Boom appointment with Golden Honey salon only... </Card.Text>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Munni ji <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text> I never thought that salon will come to my home
I booked first time service with Golden Honey - Home Salon and i was amazed😃
Good job by Golden Honey - Home Salon</Card.Text>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Neha Raj <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text> I have small kid was not able to visit salon so i booked service from Golden Honey for my home service
Guess what service I really liked
Will not go parlour </Card.Text>
                </Card>
            </div>
            </Carousel>
        </Container>
    </div>
  )
}

export default Review