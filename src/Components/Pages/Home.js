import React from 'react'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import { Services } from '../Services/Services'
import Review from '../Reviews/Review'
import Offer from '../Offer/Offer'
import Covid from '../Covid/Covid'
import Faq from '../Faq'
export const Home = () => {
  return (
    <div>
        <Hero />
        <Services />
        <Offer />
        <Covid/>
        
        <Review />
        <Faq/>
        
        
        <Footer/>
    </div>
  )
}
