import React from 'react'
import Place1 from './Place';
import Popup from './Popup';
import Hero2 from './Hero2';
const Home = () => {
  return (
    <div>
      <Hero2/>
      <Place1/>
      <Popup/>



    </div>
  )
}

export default Home








/*import React, { useState, useEffect } from 'react';
import './Home.css';
//import Home1 from './Home1';
import Place from './Place';
import Hero2 from './Hero2';
import Popup from '../components/Popup';

const studentData = [
  { name: 'Mohit Rana', company: "Intellectsoft", profession: 'Full Stack Developer', logo: 'intellectsoft.png' },
  { name: 'Sachin Singh', company: "Palo Alto Networks", profession: 'Backend Developer', logo: 'palo-alto-networks.png' },
  { name: 'Neha Sharma', company: "McAfee", profession: "Frontend Developer", logo: 'mcafee.png' },
  { name: 'Ankit', company: 'Google',profession:"Frontend Developer" },
  { name: 'Akash singh', company: 'linkdln.',profession:"Frontend Developer" },
  { name: 'Abash Sharma', company: 'Zomato',profession:"Frontend Developer" },
  { name: 'Naina chandel', company: " McAfee",profession:"Backend Developer" },
  { name: 'Titu nain', company: " Symantec Corporation ", profession:"FullStack Developer"},
  { name: 'Parshant Sharma', company: " Brother Industries, Ltd." ,profession:"FullStack Developer" },
  { name: 'anshul Rana', company: " Brother Industries, Ltd.",profession:"FullStack Developer" },
  { name: 'Devash aggarwal', company: " Brother Industries, Ltd.",profession:"Frontend Developer" },
  { name: 'Anshika malik', company: "Lexmark International, Inc.",profession:"Backend Developer" },
  { name: 'Pardeep vekent', company: "Lexmark International, Inc.",profession:"Backend Developer" },
  { name: 'Archna agarwal', company: "Fujifilm Holdings Corporation",profession:"Backend Developer" },
  { name: 'Brijmohan Sharma', company: "Fujifilm Holdings Corporation",profession:"Frontend Developer" },
  { name: 'Bhuvneswari', company: "Fujifilm Holdings Corporation", profession:"Backend Developer"},
  { name: 'Satish ', company: "Palo Alto Networks",profession:"FullStack Developer" },
  { name: 'Neha malik', company: "Palo Alto Networks",profession:"Backend Developer" },
  { name: 'Aksat dubay', company: "Palo Alto Networks", profession:"Backend Developer"},
  { name: 'Bhawesh', company: "Palo Alto Networks",profession:"Full Stack Developer" },
  { name: 'Neha dhami', company: " Check Point Software Technologies",profession:"Full Stack Developer"  },
  { name: 'Ahsaan Rana', company: " Check Point Software Technologies",profession:"Full Stack Developer" },
  { name: 'Sachin singh', company:" Check Point Software Technologies",profession:"Full Stack Developer "},
  { name: 'Vikrant Sharma', company: " Check Point Software Technologies",profession:"Full Stack Developer " },
  { name: 'Rohit Tomar', company:  " Ricoh Company, Ltd.",profession:"Full Stack Developer " },
  { name: 'Vikash singh', company: " Ricoh Company, Ltd.",profession:"Full Stack Developer " },
  { name: 'Shreeve Sharma', company:  " Ricoh Company, Ltd.",profession:"Full Stack Developer " },
  { name: 'Shweta', company: " Xerox Corporation",profession:"Full Stack Developer " },    
  { name: 'Akshy', company: " Xerox Corporation",profession:"Frontend Developer " },
  { name: 'Kartik tomar', company: " Xerox Corporation",profession:"Frontend Stack Developer " },
  { name: 'Ankuj malik', company: "Capgemini",profession:"Frontend Developer " },
  { name: 'Isita singh', company: "Capgemini",profession:"Full Stack Developer " },
  { name: 'Kartike murli', company: "Capgemini",profession:"Full Stack Developer " },
  { name: 'vijay singh', company: "Capgemini",profession:"Full Stack Developer " },
  { name: 'Himansu', company: "Capgemini",profession:"Full Stack Developer " },
  { name: 'preeti', company:"Capgemini",profession:"Full Stack Developer " },

];

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex === studentData.length - 1 ? 0 : activeIndex + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
    
    <Hero2 />
     
      <div className="slider-containers">
        {studentData.map((student, index) => (
          <div className={index === activeIndex ? 'slide active' : 'slide'} key={index}>
            <h2>{student.name}</h2>
            <p>{student.company}</p>
            <p>{student.profession}</p>
          </div>
        ))}
      </div>
    
      <Place />
      <Popup/>
      
    </div>
  );
}

export default Home;
*/
