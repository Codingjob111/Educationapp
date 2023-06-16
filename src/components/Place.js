import React from 'react';
import './place.css';
import im from '../images/q1.jpg'
import im1 from '../images/M1.jpg'
import im2 from '../images/M2.jpg'
import im3 from '../images/M3.jpg';
import im5 from '../images/q41.jpg';


const Place = () => {
  return (
    <div>
      <h2 className='look'>One Stop Career Problems:</h2>
      <div className="card-container">
        <TriangleCard
          imageSrc={im}
          name="Neha Singh"
          title="Mother Placed in Microsoft"
          description="After a remarkable ten-year interval, she triumphantly secured a placement at Microsoft, with an impressive annual salary of 7 lakhs.."
        />
        <TriangleCard
          imageSrc={im1}
          name="Akansha Sharma"
          title="Non-Tech Employee to Tech Employee"
          description="A non-tech employee transitioned to a tech role with a salary of 11 Lakh per annum."
        />
        <TriangleCard
          imageSrc={im2}
          name="Preeti Chaudhary"
          title="BSc Student with High Salary"
          description="A BSc student received a placement with a salary of 8 Lakh per annum."
        />
        <TriangleCard
          imageSrc={im3}
          name="Sachin"
          title="35-Year-Old Joins HCL Tech, Embarking on a New Chapter"
          description="A 35-year-old individual successfully joined a tech company with a salary of 6 Lakh per annum."
        />
   <TriangleCard
          imageSrc={im5}
          name="Amit Singh"
          title="
          A Hindi medium student has joined a tech company based in Bangalore"
          description="A 35-year-old individual secured a lucrative position in a tech company, earning an impressive salary of 9 lakhs per annum.."
        />



      </div>
    </div>
  );
};

const TriangleCard = ({ imageSrc, title, description,name }) => {
  return (
    <div className="triangle-card">
       
      <img src={imageSrc} alt="Card Image" />
      <h2 className='look'>{name}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Place;
