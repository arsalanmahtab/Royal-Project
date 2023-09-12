import React from 'react'
import background from '../Resources/images/bg1.png';
import Contact from '../Resources/images/Contact.png';

const About = () => {
  return (
    <>
    
    <div className="imgcontact">
                <img src={background} alt="" className="image-overly-about" />
                <div className='contactdetails'>
                    <h1 className="contactheading">CONSTRUCTION ESTIMATING SERVICES</h1>
                    <p style={{ color: "white" }}>Are you looking for a trustworthy website that offers building estimation services? Royal Estimating offers material takeoffs, commercial, residential, and industrial estimating services all under one roof. Our ability to give accurate material estimates to our valued clients and our competitive market knowledge ensure that we consistently produce winning bids.</p>
                </div>
            </div>

          <div className="aboutimgtxt">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="abouttxt">
                            <div className="txtone">
                                <h3>Fast Turnaround</h3>
                                <p>Our fast turnaround time gives you more time before the bid date to study the estimate and compare it with the quotes you have received from subcontractors/suppliers.
</p>
                            </div>
                            <div className="txttwo">
                                <h3>Technical Support</h3>
                                <p>Our team is ready to answer your queries, just schedule a time and discuss it with our estimators.</p>
                            </div>
                            <div className="txtthree">
                                <h3>Accurate Pricing</h3>
                                <p>Our estimates are reliable and competitive keeping in mind the volatility of the market with a great deal of price instability at this time, thus increasing your chances of winning bids.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>  

       <div className="contactimgtxt">
       <div className="imgcontact">
                <img src={Contact} alt="" className="image-with-shadow" />
                <div className='contactdetails'>
                    <h1 className="contactheading">Get a Quote</h1>
                 
                    <p style={{ color: "white" }}>No matter what type of construction cost estimate you want we have a team of experts to provide an error-free estimate. Contact us today for a Qoute!</p>
                    <button className="btncontact">Contact Us</button>
                </div>
            </div>
        
        
        </div>     
    </>
  )
}

export default About