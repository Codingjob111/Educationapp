import React from 'react';
import './Hero.css';
import Testimonial from './Testimonials';
import Features from './Features';
import { Link } from 'react-router-dom';
import video from '../images/f.mp4';


const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero__video-wrapper">
          <video className="hero__background" autoPlay muted loop playsInline>
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="hero__content">
         
         
         
          <Link to="/Courses" className="btn btn-primary btn-responsive">
            Explore Our Programs
          </Link>
        </div>
      </section>

      <Testimonial />
      <Features />
     
    </div>
  );
};

export default Hero;


