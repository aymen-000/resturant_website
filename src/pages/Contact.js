import React from 'react'
import "./contact.css"

function Contact() {
  return (
    <div className="contact">
        <div className='photo'></div>
        <div className='login'>
            <h1>CONTACT US</h1>
            <div className='form'>
                <form id="contact" method="POST">
                    <label htmlFor="fname">Full Name</label>
                    <input name="fname" placeholder="Enter Your Full Name" type="text"/>
                    <label htmlFor="email">Your E-mail</label>
                    <input name="email" placeholder="somethin@some.domain" type="email"/>
                    <labe htmlFor="message" className="mes">Message</labe>
                    <textarea rows="6" placeholder="Enter Your Message" name='message' required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div> 
    </div>
  )
}

export default Contact
