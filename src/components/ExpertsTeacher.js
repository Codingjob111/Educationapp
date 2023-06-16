import React, { useState } from 'react';
import './ExpertsTeacher.css';
import img1 from '../images/1b.jpg';
import img3 from '../images/11.jpg';
import img2 from '../images/1.jpg';
import img4 from '../images/im4.jpg';

const teachersData = [
  {
    id: 1,
    name: 'Aksat OJha',
    title: 'Frontend Developer',
    company: 'Microsoft',
    description: 'Aksat is an experienced full-stack developer with a passion for teaching others. He has worked on numerous projects across various industries and enjoys sharing his knowledge with his students.',
    image: img1,
  },
  {
    id: 2,
    name: 'Manish Kumar',
    company: 'Microsoft',
    title: 'FullStack Developer',
    description: 'Manish is a talented FullStack developer who loves creating beautiful and responsive user interfaces. She has a keen eye for design and is always looking for new ways to improve her skills.',
    image: img3,
  },
  {
    id: 3,
    name: 'Apoorva Singh',
    title: 'Backend Developer',
    company: 'Facebook',
    description: 'Apoorva is a skilled backend developer with expertise in database design and optimization. He is passionate about building scalable and secure web applications and enjoys teaching others how to do the same.',
    image: img2,
  },
  {
    id: 4,
    name: 'Anshul Kumar',
    title: 'Mern Stack Developer',
    company: 'JobiSkill',
    description: 'Anshul is a skilled MernStack developer with expertise in frontend and database design and optimization. He is passionate about building scalable and secure web applications and enjoys teaching others how to do the same.',
    image: img4,
  },
];

const ExpertsTeachers = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const toggleFlap = (id) => {
    setSelectedTeacher((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="experts-teachers">
      <h2 className="section-titles">Meet Our Expert Mentors</h2>
      <div className="teachers-container">
        {teachersData.map((teacher) => (
          <div
            className={`teacher-card ${selectedTeacher === teacher.id ? 'open' : ''}`}
            key={teacher.id}
            onClick={() => toggleFlap(teacher.id)}
          >
            <div className="teacher-image">
              <img src={teacher.image} alt={teacher.name} />
            </div>
            <div className="teacher-details">
              <h3 className="teacher-name">{teacher.name}</h3>
              <p className="teacher-title">{teacher.title}</p>
              {selectedTeacher === teacher.id && (
                <>
                  <p className="teacher-company">{teacher.company}</p>
                  <p className="teacher-description">{teacher.description}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertsTeachers;

