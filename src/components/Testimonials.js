import React, { useState } from 'react';
import './Testi.css';

const testimonials = [
  {
    id: 1,
    text: "The course material was well-structured and easy to understand. The hands-on approach of the instructors helped me gain practical experience and build my confidence as a developer. Highly recommend this program!",
    author: "John Doe",
    occupation: "Full Stack Developer",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    text: "I was a complete beginner when I started this program, but the instructors made me feel at ease and helped me learn at my own pace. The course was challenging but rewarding, and I'm now a confident Frontend Developer.",
    author: "Jane Smith",
    occupation: "Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 3,
    text: "The Backend Development course was a game-changer for me. The instructors were experts in their field and provided invaluable feedback on my code. I'm now a skilled Backend Developer and have even landed my dream job thanks to this program!",
    author: "Reni martin",
    occupation: "Backend Developer",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-content">
        <div className="testimonial-text">
          <p>{testimonials[activeIndex].text}</p>
        </div>
        <div className="testimonial-author">
          <div className="author-info">
            <img src={testimonials[activeIndex].avatar} alt="author" />
            <div className="author-details">
              <h4>{testimonials[activeIndex].author}</h4>
              <p>{testimonials[activeIndex].occupation}</p>
            </div>
          </div>
        </div>
        <div className="testimonial-controls">
          <button className="testimonial-btn" onClick={handlePrevClick}>Prev</button>
          <button className="testimonial-btn" onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;



