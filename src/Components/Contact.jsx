import React from 'react'
import CountUp from 'react-countup';
import background from '../Resources/images/bg1.png';
import backgroundtwo from '../Resources/images/bg2.jpg';
import backgroundthree from '../Resources/images/bg4.jpg';


const Contact = () => {
    return (
        <>
            <div className="imgcontact">
                <img src={backgroundthree} alt="" className="image-with-shadow" />
                <div className='contactdetails'>
                    <h1 className="contactheading">CONTACT US</h1>
                    <h6 className='contactheadingtwo'>Get Construction Cost Estimates & Material Takeoffs</h6>
                    <p style={{ color: "white",padding:"10px" }}>No matter what type of construction cost estimate you want we have a team of experts to provide an error-free estimate. Contact us today for a Quote!</p>
                </div>
            </div>

            <div className="contactmap">
                <div className="row">
                    <div className="col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.567162950083!2d-74.04130624778283!3d40.749548797839466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2576471931149%3A0xb3fed2e8341fd12f!2sShopRite%20of%20Hoboken!5e0!3m2!1sen!2s!4v1694356143481!5m2!1sen!2s" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-md-6">

                        <div className="contactinfo">
                            <i class="bi bi-geo-alt-fill"></i>  <p>447 Broadway 2nd Floor , Suite 775#, NewYork</p>
                            <p>+1 315 636 0254</p>
                            <p>contact@royalestimating.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contactform">
                <div className="mainform">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4">
                            <h1 className='quetext'>Put Your Queries Here</h1>
                        </div>
                        <div className="col-md-3">
                            <form>
                                <div class="form-group">
                                   
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />
                                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>
                                <div class="form-group">
                                  
                                    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Your Email Address" />
                                </div>
                                <div class="form-group">
                                  
                                  <input type="Subject" class="form-control" id="exampleInputPassword1" placeholder="Subject" />
                              </div>
                              <div class="form-group">
    
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Your Message'></textarea>
                                </div>
                                <button type="submit" className="btnsubmit">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact