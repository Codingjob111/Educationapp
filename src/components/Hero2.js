import React, { useEffect, useRef } from 'react';
import './hero2.css';
import vid from '../images/b.mp4';

const Hero2 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.play();
  }, []);

  return (
    <div className="hero2">
     
      <div className="hero2-video-container">
        <video ref={videoRef} className="hero2-video" autoPlay loop>
          <source src={vid} type="video/mp4" />
        </video>
      </div>
      <div className="hero2-content">
        <h1 className="lok">Welcome to Our Company</h1>
        <p className="lok">
          We are revolutionizing the industry with our advanced AI models.
          Our cutting-edge technology enables us to provide innovative solutions
          for various industries and domains.
        </p>
      </div>
    </div>
  );
};

export default Hero2;

