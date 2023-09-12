import React from 'react';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Style.css';

import background from '../Resources/images/bg1.png';
import backgroundtwo from '../Resources/images/bg2.jpg';
import imgone from '../Resources/images/imgone.jpg';
import imgtwo from '../Resources/images/imgtwo.jpg';
import house from '../Resources/images/house-solid.svg';
import city from '../Resources/images/city-solid.svg';
import imgfour from '../Resources/images/imgfour.png';

const Home = () => {
    return (
        <>
            <div className="mainimg">
                <div className='mainText'>
                    <h1 className='royaltxt'>ROYAL ESTIMATING</h1>
                    <p className='royaltxttwo'>CONSTRUCTION ESTIMATING SERVICES</p>
                    <div>
                        <button className='royalbtn'>GET A QUOTE</button>
                    </div>
                </div>
                <img src={background} alt="" />
            </div>
            <div className="mainsectiontwo">
                <div className="row">
                    <div className="col-md-5">
                        <img className='imgone' src={imgone} alt="" />
                    </div>
                    <div className="col-md-6 colimgtxt" style={{ textAlign: "center" }}>
                        <h3 className='royaltxtthree'>
                            Our Estimating Assists Busy Contractors To Estimate And Win Bids
                        </h3>
                        <p className="royaltxtfour" >
                            Are you looking for a trustworthy website that offers building estimation services? Royal Estimating offers material takeoffs, commercial, residential, and industrial estimating services all under one roof. Our ability to give accurate material estimates to our valued clients and our competitive market knowledge ensure that we consistently produce winning bids.
                        </p>
                        <p className="royaltxtfour">
                            we cater to people with a professional team of estimators that is proficient enough to give you the exact estimation of material takeoff services. Our estimators have been working in the market over the years and have lots of knowledge in their respective fields. This way, they know perfectly to satisfy people with outstanding services.
                        </p>
                        <button className="royalbtn">READ MORE</button>
                    </div>
                </div>
            </div>
            <div className="mainsectionthree">
                <div className="image-container">
                    <img src={backgroundtwo} alt="" className="image-with-overlay" />
                    <div className="text-overlay">
                        <div className="row counterrow">
                            <div className="col-md-3 col-sm-12">
                                <h2 className="countertxt">
                                    WHY GET OUR CONSTRUCTION ESTIMATION SERVICES
                                </h2>
                            </div>
                            <div className="col-md-9 col-sm-12">
                                <p style={{ color: "#fff", fontSize: "20px", fontWeight: "500",textAlign:"left" }}>
                                    We offer a diverse number of services from our single place; From commercial to residential, you can get any kind of estimation service. Our team is well versed with the knowledge practice from these societies or governing bodies Estimating services
                                </p>
                                <div class="counter-area">
                                    <div class="container">
                                        <div class="row row-mobile" style={{ marginTop: "40px" }}>
                                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 counter1-box wow fadeInDown" data-wow-duration=".5s" data-wow-delay=".20s">
                                                <h2 class="counters"> <CountUp end={100} />+</h2>
                                                <p className='counter-title'>Working Hours </p>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 counter1-box wow fadeInDown" data-wow-duration=".5s" data-wow-delay=".40s">
                                                <h2 class="counters"> <CountUp end={100} /></h2>
                                                <p className='counter-title'>Sucessful Projects</p>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 counter1-box wow fadeInDown" data-wow-duration=".5s" data-wow-delay=".60s">
                                                <h2 class="counters"> <CountUp end={100} />+</h2>
                                                <p className='counter-title'>Trained Professionals</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainsectionfour">
                
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className='proservices'>Providing Professional Estimating Services</h1>
                            <p>We provide a dedicated construction cost estimator for the accurate and instant construction cost estimates at an affordable price tag for busy contractors. We are working as a professional cost estimating consulting company with years of experience.</p>
                            <div className="imgtxt" >
                                <img src={city} alt="" style={{width:"15%",border:"1px solid grey",padding:"20px"}} /> <p style={{marginTop:"30px",marginLeft:"-30px"}}> Quantity Takeffs </p>
                                <img src={house} alt="" style={{width:"15%",border:"1px solid grey",padding:"20px" ,marginLeft:"25px"}} /> <p style={{marginTop:"30px",marginLeft:"-30px"}}> Cost Estimation </p>
                            </div>
                            <button className='btnservices'>Our Services</button>
                        </div>
                        <div className="col-md-5">
                            <img src={imgtwo} alt="" className='imgtwo' />
                        </div>
                    </div>
                
            </div>
            <div className="mainsectionfive">
                <div className="row">
                    <div className="col-md-6">
                        <img src={imgfour} className='imgfour' alt="" />
                    </div>
                    <div className="col-md-6 quoteimg">
                        <div className='txtquote'>
                            <h2 className='' style={{color:"white"}}>Get a Quote</h2>
                            <p style={{color:"white"}}>Get Construction Cost Estimates & Material Takeoffs</p>
                            <p style={{color:"grey"}}>No matter what type of construction cost estimate you want we have a team of experts to provide an error-free estimate. Contact us today for a Qoute!</p>
                            <button className="btnquote">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainsectionsix">
            </div>
        </>
    )
}

export default Home;
