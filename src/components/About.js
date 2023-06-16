import React from 'react';
import './About.css';
import image from '../images/imm.jpg'


import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <h2 className='look'>About Us</h2>

        <p>We are a team of passionate educators dedicated to providing quality education to students around the world.</p>
        <p>Freelancers earn money by actively engaging in and successfully completing jobs or projects for clients with Ai tools.</p>
        <p>
     

"Our mission is to empower learners to achieve their goals and pursue their passions through accessible, flexible, and personalized learning experiences. We are committed to ensuring 100 percent placement assistance, providing our learners with the necessary support to secure meaningful employment. However, we understand that not everyone may choose the traditional job route. For those who prefer freelancing, we offer comprehensive training on how to secure orders and build a successful freelance career. With guidance from our esteemed mentors, including professionals from Microsoft, Google, and other top tech companies, you'll have access to invaluable industry insights and expertise. By acquiring the skills needed and leveraging our mentorship, you can unlock opportunities to earn a sustainable income and thrive as a freelancer."

This expanded statement highlights your commitment to both job placement assistance and freelancing opportunities, showcasing the presence of renowned mentors from industry-leading companies.<br></br>
 Our courses are open to students who have completed their 12th grade and are interested in transitioning to the IT field. We welcome individuals from non-IT backgrounds who are eager to acquire the necessary skills and knowledge to excel in the IT industry. Additionally, our programs are well-suited for housewife looking to enhance their career prospects or explore new opportunities. We believe that age should not be a barrier, and candidates between 18 and 35 years old are encouraged to join our courses. We embrace diversity and value the unique perspectives and experiences that each student brings, fostering an inclusive learning environment for all.

        </p>
        <Link to='/Events'className="btn btn-primary" >Learn More</Link>
      </div>
      <div className="about-right">
        <img src={image}alt="About Us" />
      </div>
    </div>
  );
};

export default About;
