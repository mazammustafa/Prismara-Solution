import React from 'react'
import './ContactForm.css'
import { BtnPrimary } from '../Buttons/Button'

const ContactForm = ({ paddingValues, subText, mainHeading, subTextAlt, contactContentImg }) => {
  return (
    <>
      <section className='content' style={{ padding: `${paddingValues}` }}>
        <div className="container">
          <div className="contact-content-wrapper" >
            <div className="contact-content-details" >
              <h4 className='sub-text secondary-color'>{subText}</h4>
              <h2 className="main-heading">{mainHeading}</h2>
              <h6 className='sub-text-alt'>{subTextAlt}</h6>

              <form action="">
                <input type="text" name='FirstName' placeholder='First Name' />
                <input type="tel" name='PhoneNumber' placeholder='Phone Number' />
                <input type="email" name='EmailAddress' placeholder='Email Address' />
                <textarea name="message" id="" placeholder='Message'></textarea>
                <BtnPrimary btnText={'Submit'} />
              </form>
            </div>
            <div className="contact-content-img">
              <img src={contactContentImg} alt="" />
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
