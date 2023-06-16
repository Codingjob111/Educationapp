import React from 'react';
import './Feature.css';
import { AiFillVideoCamera } from 'react-icons/ai';
import { FaUser, FaLaptop, FaCertificate, FaComments } from 'react-icons/fa';
import ExpertsTeachers from './ExpertsTeacher';
import Join from './Join';
import Popup from './Popup';


const Features = () => {
  return (
    <section id="features">
      <ExpertsTeachers />
     <Join/>
    
      <div className="container1">
       

        <h2 className="section-titles">Our Features</h2>
        <div className="feature-container">
          <div className="feature-box">
            <AiFillVideoCamera className="feature-icon colorful" />
            <h3>Online Learning
            <p>Learn on your schedule with our online courses.</p>

            </h3>
           
          </div>
          <div className="feature-box">
            <FaUser className="feature-icon colorful" />
            <h3>Individual Attention
            <p>Get personalized feedback and attention from our expert teachers.</p>

            </h3>
          
          </div>
          <div className="feature-box">
            <FaLaptop className="feature-icon colorful" />
            <h3>Hands-on Experience
            <p>Practice what you learn with real-world projects and assignments.</p>

            </h3>
            
          </div>
          <div className="feature-box">
            <FaCertificate className="feature-icon colorful" />
            <h3>Freelancer
            <p>"Freelancing offers students a unique opportunity to develop valuable skills."</p>

            </h3>
        
          </div>
          <div className="feature-box">
            <FaComments className="feature-icon colorful" />
            <h3>Community Support
            <p>Connect with other students and our community of learners.</p>
            </h3>
         
          </div>
          <div className="feature-box">
            <FaCertificate className="feature-icon colorful" />
            <h3>Certification
            <p>Earn a certificate upon completion of our courses.</p>

            </h3>
           

           


          </div>
         
        </div>


        
      </div>
      <Popup/>
    
    </section>
  );
};

export default Features;



