import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="look1">Contact Us</h2>

      <div className="contact-details">
        <div className="contact-item">
          <i className="fa fa-map-marker"></i>
          <p className="look">Kormangala,100 Ft Road,Domlur Bangluru, Karnataka, 560071</p>
        </div>
        <div className="contact-item">
          <i className="fa fa-mobile"></i>
          <p className="look">+917017990795</p>
        </div>
        <div className="contact-item">
          <i className="fa fa-envelope"></i>
          <p className="look">Jobiskille@gmail.com</p>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77663502796!2d77.30056918827775!3d12.954458677574243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1683821128513!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          title="home"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mbjegoel" method="POST" className="contact-inputs">
            <input
            className='look'
              type="text"
              placeholder="Username"
              name="username"
              required
              autoComplete="off"
            />

            <input
            className='look'
              type="text"
              placeholder="Mobile Number"
              name="Number"
              required
              autoComplete="off"
            />

            <input
            className='look'
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
            className='look'
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your message"
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;









/*import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className='look'>Contact Us</h2>
    
      <div className="contact-details">
        <div className="contact-item">
          <i className="fa fa-map-marker"></i>
          <p className='look'>Kormangala,100 Ft Road,Domlur Bangluru, Karnataka, 560071</p>
        </div>
        <div className="contact-item">
          <i className="fa fa-mobile"></i>
          <p className='look'>+917017990795</p>
        </div>
        <div className="contact-item">
          <i className="fa fa-envelope"></i>
          <p className='look'>Jobiskille@gmail.com</p>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77663502796!2d77.30056918827775!3d12.954458677574243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1683821128513!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          title="home"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mbjegoel" method="POST" className="contact-inputs">
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="text"
              placeholder="Mobile Number"
              name="Number"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your message"
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

*/