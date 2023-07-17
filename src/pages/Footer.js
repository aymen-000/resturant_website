import React from 'react'
import "./Footer.css"
import fac from  "../assets/social/fac.png"
import inst from "../assets/social/insta.png"
import twi from "../assets/social/twi.png"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Footer() {
  return (
    <div className='footer'>
      <div className='social_media'>
        <div className='fac'> <Link to="https://www.facebook.com"><img src={fac} height="40px" width="40px"/></Link>  </div>
        <div className='insta'><Link to="https://www.instagram.com"><img src={inst} height="40px" width="40px"/></Link></div>
        <div className='twi'><Link to="https://www.twitter.com"><img src={twi} height="40px" width="40px"/></Link></div>
      </div>
      <p> &copy;2023 bestpizza.com </p>
    </div>
  )
}

export default Footer
