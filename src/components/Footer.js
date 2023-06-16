import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h5 className="footer__title">Our Services</h5>
            <ul className="footer__list">
              <li><Link to="/FullStack">Full Stack Development</Link></li>
              <li><Link to="/Backend">Backend Development</Link></li>
              <li><Link to="/Frontend">Frontend Development</Link></li>
              <li><Link to="/Internship">Internship Program</Link></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5 className="footer__title">JobiSkill</h5>
            <ul className="footer__list">
              <li><Link to="/Privacy">Privacy & Policy</Link></li>
              <li><Link to="/Term">Term & Conditions</Link></li>
              <li><Link to="/Courses">Our Courses</Link></li>
              <li><Link to="/PricingR">Pricing & Refund Policy</Link></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5 className="footer__title">Contact Us</h5>
            <p className="footer__contact-info">
              Kormangala, 100 Ft Road, Domlur Bangluru, Karnataka, India (560071)<br /><br />
              (+91)7017990795<br />
              Jobiskille@gmail.com
            </p>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5 className="footer__title">Connect with Us</h5>
            <ul className="footer__social-icons">
              <li><a href="https://instagram.com/jobiskill_1.com1?igshid=NTc4MTIwNjQ2YQ=="><FaInstagram /></a></li>
              <li><a href="https://www.linkedin.com/company/getjob-com/"><FaLinkedin /></a></li>
              <li><a href="https://www.youtube.com/@Learn_ProgrammingEasy_jobs"><FaYoutube /></a></li>
              <li>
                <a href="https://wa.me/1234567890">
                  <FaWhatsapp /> (+91)7017990795
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="above-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>&copy; 2023 Codingjobs Technology. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;






/*import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h5 className='a'>Our Services</h5>
            <ul>
              <li><Link to="/FullStack">Full Stack Development</Link></li>
              <li><Link to="/Backend">Backend Development</Link></li>
              <li><Link to="/Frontend">Frontend Development</Link></li>
              <li><Link to="/Internship">Internship Program</Link></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5>JobiSkill</h5>
            <ul>
              <li><Link to="/Privacy">Privacy & Policy</Link></li>
              <li><Link to="/Term">Term & Conditions</Link></li>
              <li><Link to="/Courses">Our Courses</Link></li>
              <li><Link to="/PricingR">Pricing & Refund Policy</Link></li>
            </ul>
          </div>
          <div>
          <h5>Contact Us</h5>
         
           <p className='foo'>
              Kormangala, 100 Ft Road, Domlur Bangluru, Karnataka, India (560071)<br /><br />
              (+91)7017990795<br />
              Jobiskille@gmail.com
            </p>
            </div>
          
          <div className="foo1">
          <h5>Connect with Us</h5>
            <ul className="social-icons">
              <li><a href="https://instagram.com/jobiskill_1.com1?igshid=NTc4MTIwNjQ2YQ=="><FaInstagram /></a></li>
              <li><a href="https://www.linkedin.com/company/getjob-com/"><FaLinkedin /></a></li>
              <li><a href="https://www.youtube.com/@Learn_ProgrammingEasy_jobs"><FaYoutube /></a></li>
              <li>
                <a href="https://wa.me/1234567890">
                  <FaWhatsapp /> (+91)7017990795
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="above-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>&copy; 2023 Codingjobs Technology. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


*/