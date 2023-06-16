import React from 'react';
import './courses.css';
import { Link } from 'react-router-dom';
import Popup from './Popup';
const Courses = () => {
  const courseData = [
    {
      title: 'Full Stack Development',
      description:
        'Learn how to develop web applications from scratch using the latest tools and technologies in full stack development. Our program covers both front-end and back-end development, as well as database management and server deployment with advance data structure.',
      price: '34999 INR',
      timePeriod: '12 Months', // Add the time period here
      imageClass: 'full-stack',
    },
    {
      title: 'Frontend Development',
      description:
      'Our comprehensive program offers the opportunity to master the art of creating visually appealing and responsive user interfaces. Through in-depth instruction and hands-on experience, students will gain proficiency in HTML, CSS, and JavaScript and Reactjs—the fundamental building blocks of front-end development. With a strong emphasis on UI/UX design principles, participants will learn how to craft engaging and intuitive interfaces that enhance user experience.',
      price: '17999 INR',
      timePeriod: '6 Months', // Add the time period here
      imageClass: 'frontend',
    },
    {
      title: 'Backend Development',
      description:
      'Learn how to create server-side applications and APIs using popular programming languages like java script,expressjs,mongodb and Node.js. Our program covers database management, web security, and scalability, as well as cloud deployment using platforms like AWS and Google Cloud.',
      price: '17999 INR',
      timePeriod: '6 Months', // Add the time period here
      imageClass: 'backend',
    },
    {
      title: 'Internship Programs',
      description:
        'Gain practical work experience in software development by joining our internship program. You will work on real-world projects, collaborate with experienced developers, and receive mentorship and training to help you launch your career in tech.',
      price: '17999 INR',
      timePeriod: '3 Months & 6 Months', // Add the time period here
      imageClass: 'internship',
    },
  ];

  return (
    <div className="courses">
      <h2 className="courses__title11">Our Programs</h2>
      <div className="course-cards">
        {courseData.map((course, index) => (
          <div className="course-card" key={index}>
            <div className={`course-card__image ${course.imageClass}`}></div>
            <div className="course-card__details">
              <h3 className="course-card__title">{course.title}</h3>
              <p className="course-card__description">{course.description}</p>
              <div className="course-card__price-time">
                <p className="course-card__price">{course.price}</p>
                <p className="course-card__time-period">{course.timePeriod}</p>
              </div>
              <Link to="/Student">
                <button className="course-card__button">Enroll Now</button>
              </Link>
            </div>
            
          </div>
         
        ))}
      </div>
      <Popup/>
    </div>
  );
};

export default Courses;


