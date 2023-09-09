import React from 'react'
import CountUp from 'react-countup';
import background from '../Resources/images/bg1.jpg';

import backgroundtwo from '../Resources/images/bg2.jpg';
import imgone from '../Resources/images/imgone.jpg'
import './Style.css';

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
                        <p className='royaltxtthree'>
                            Our Estimating Assists Busy Contractors To Estimate And Win Bids

                        </p>
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

            <div className="counterarea">


                {/* <div className="row counterrow">
                        <div className="col-md-3">
                            <p className="countertxt">
                            WHY GET OUR CONSTRUCTION ESTIMATION SERVICES
                            </p>
                        </div>
                        <div className="col-md-9">
                          
                            <p style={{color:"#000000",fontSize:"20px",fontWeight:"500"}}>We offer a diverse number of services from our single place; From commercial to residential, you can get any kind of estimation service. Our team is well versed with the knowledge practice from these societies or governing bodies Estimating services</p>
                            
                        </div>
                    </div>
                
            <img src={backgroundtwo} alt="" /> */}
                <div className="mainsectionthree">
                    <div className="image-container">
                        <img src={backgroundtwo} alt="" className="image-with-overlay" />
                        <div className="text-overlay">
                            <div className="row counterrow">
                                <div className="col-md-3">
                                    <p className="countertxt">
                                        WHY GET OUR CONSTRUCTION ESTIMATION SERVICES
                                    </p>
                                </div>
                                <div className="col-md-9">
                                    <p style={{ color: "#fff", fontSize: "20px", fontWeight: "500" }}>
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

            </div>



        </>
    )
}

export default Home