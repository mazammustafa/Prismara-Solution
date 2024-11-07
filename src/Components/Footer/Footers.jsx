import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'; // Import the React icon
import './Footer.css'
import Navbar from '../Navbar/Navbar';
import newsletterSubmitBtn from '../../assets/newsletter-submit-btn.png'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footers = ({ paddingValues, backgroundValue, footerLogo }) => {
  return (
    <>
      <section className="footer" style={{ background: `${backgroundValue}` }}>
        <div className="container">
          <div className="footer-wrapper" style={{ padding: `${paddingValues}` }}>
            <div className="footer-col-01">
              <div className="footer-logo">
                <img src={footerLogo} alt="" />
              </div>
              <div className="footer-social-contacts">
                <div className="contact-number-details">
                  {/* Use the imported icon here */}

                  <FontAwesomeIcon icon={faWhatsapp} />
                  <p>Call or Text <a href="tel:0123456789">(0123) 456 789</a></p>
                </div>
                <div className="socials-icons">
                  <FontAwesomeIcon icon={faFacebookF} />
                  <FontAwesomeIcon icon={faXTwitter} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
              </div>

            </div>
            <div className="footer-col-02">
              <div className="footer-navigation">
                <h4 className='navigate sub-text'>Navigate</h4>
                <Navbar />
              </div>
            </div>
            <div className="footer-col-03">
              <div className="footer-newsletter">
                <h4 className='newsletter sub-text'>Subscribe to Our News letter</h4>
                <p className='text'>Subscribe to receive loan offers and 
                news in your inbox.</p>
                <form action="">
                <input type="email" name='FirstName' placeholder='Email Address' />
                <button><FontAwesomeIcon icon={faPaperPlane} /> </button>
              </form>
              </div>
            </div>
          </div>
          <div className="copywrite">
            <p className='text'>Copyright © 2024 Prismara Solutions</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footers;
