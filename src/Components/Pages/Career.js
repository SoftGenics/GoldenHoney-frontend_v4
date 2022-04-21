import React from 'react'
import './Contactus.css'
import emailjs from 'emailjs-com'
import Footer from '../Footer/Footer'
const Career = () => {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_fp7z7mo','template_viw4y6p', e.target,'BBpoc0ny8sx1SsIeY'
        
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log)
    }
  return (
    <div className='contact'>
        <section className="contact-address-area">
    <div className="container">
        <div className="sec-title-style1 text-center max-width">
            <div className="title">Career with Golden honey</div>
            <div className="text"><div className="decor-left"><span></span></div><p>Quick Contact</p><div className="decor-right"><span></span></div></div>
            <div className="bottom-text">
            
            </div>
        </div>
                <div className="contact-address-box row">
                    <div className="col-sm-4 single-contact-address-box text-center">
                        <div className="icon-holder">
                            <span className="icon-clock-1">
                                <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span><span className="path14"></span><span className="path15"></span><span className="path16"></span><span className="path17"></span><span className="path18"></span><span className="path19"></span><span className="path20"></span>
                            </span>
                        </div>
                        <h3>GOLDEN HONEY</h3>
                        <h2>HOME SALON</h2>
                    </div>
                    <div className="col-sm-4 single-contact-address-box main-branch">
                        <h3>Our Details</h3>
                        <div className="inner">
                            <ul>
                                <li>
                                    <div className="title">
                                        <h4>Address:</h4>
                                    </div>
                                    <div className="text">
                                        <p>A/131 Sneha Complex, A. G Colony, Ag Colony,<br></br> Patna - 800025, Near Sbi Bank Branch</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="title">
                                        <h4>Mobile <br></br> E-mail:</h4>
                                    </div>
                                    <div className="text">
                                        <p>93188 18893<br></br><small>goldenhoneysalon@gmail.com</small> </p>
                                    </div>
                                </li>
 
   
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4 single-contact-address-box text-center">
                        <div className="icon-holder">
                            <span className="icon-question-2">
                                <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span>
                            </span>
                        </div>
                        <h3>GOLDEN HONEY</h3>
                        <h2>HOME SALON</h2>
                    </div>

        </div>
    </div>
</section>  
<section className="contact-info-area">
    <div className="container">
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="contact-form">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="sec-title-style1 float-left">
                                <div className="title">Send Your Message</div>
                                <div className="text"><div className="decor-left"><span></span></div><p>Career Form</p></div>
                            </div>

                        </div> 
                    </div>   
                    <div className="inner-box">
                        <form id="contact-form" name="contact_form" className="default-form" onSubmit={sendEmail} >
                            <div className="row">
                                <div className="col-xl-6 col-lg-12">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="input-box">   
                                                <input type="text" name="name" placeholder="Name"  />
                                            </div> 
                                             <div className="input-box"> 
                                                <input type="text" name="phone"  placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="input-box"> 
                                                <input type="email" name="email"  placeholder="Email"  />
                                            </div>
                                            <div className="input-box"> 
                                                <input type="number" name="experience" placeholder="Experience" />
                                            </div> 
                                        </div>  
                                    </div> 
                                    <div className="row">
                                         <div className="col-xl-12">
                                            <div className="input-box"> 
                                                <input type="text" name="subject"  placeholder="Subject" />
                                            </div>     
                                        </div> 
                                    </div>   
                                </div>
                                <div className="col-xl-6 col-lg-12">
                                    <div className="input-box">    
                                        <textarea name="message" placeholder="Your Message..." required=""></textarea>
                                    </div>
                                    <div className="button-box">
                                        <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" />
                                        <button type="submit" data-loading-text="Please wait..." >Send Message<span className="flaticon-next"></span></button>    
                                    </div>         
                                </div> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>
<Footer />
    </div>
  )
}

export default Career