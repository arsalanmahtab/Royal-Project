import React from 'react'
import logo from '../Resources/images/logo.png';

const Footer = () => {
  return (
    <>
    <div className="mainfooter" style={{background:"#141318"}}>
        <div className='footertxt'>
        <img src={logo} alt="" />
        <p style={{color:"#666668"}}>447 Broadway 2nd Floor , Suite 775, #NewYork</p>
        <p style={{color:"#666668"}}>+1 315 636 0254</p>
        <p style={{color:"#666668"}}>contact@royalestimating.com</p>
        <p style={{color:"#666668"}}>©Royal Estimating. All Rights Reserved.</p>
        </div>
    
       
    </div>

    
    
    </>
  )
}

export default Footer