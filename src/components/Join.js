import React from 'react';
import { FaCheckCircle, FaCogs, FaLaptop, FaQuestionCircle, FaCertificate, FaCode, FaUsers } from 'react-icons/fa';
import './Join.css';
import { BsFillCameraFill } from 'react-icons/bs';
import { FcLineChart } from 'react-icons/fc';
import { GiTeacher } from 'react-icons/gi';
import {MdReportProblem} from 'react-icons/md';
import {AiFillProject} from 'react-icons/ai';


const Join = () => {
  return (
    <div>
     

      <div className="why-join-usss">
        <div className="section-titles">
          <h1 className='section-titles'>7,000+ JOBI STUDENTS TO INSPIRE YOU! WHY?</h1>
        </div>
        <div className="card-container">
          <ul className="card-list">
            <li className="card-item">
              <div className="cards">
                <div className="triangle"></div>
                <FaCheckCircle className="icon" style={{ color: 'green' }} />
                <span className="card-text">100% Placement Assistance</span>
              </div>
            </li>
            <li className="card-item">
              <div className="cards">
                <div className="triangle"></div>
                <GiTeacher className="icon" style={{ color: 'green' }} />
                <span className="card-text">Google, Facebook, Microsoft mentorship</span>
              </div>
            </li>
            <li className="card-item">
              <div className="cards">
                <div className="triangle"></div>
                <FaCogs className="icon" style={{ color: 'blue' }} />
                <span className="card-text">AI Tools Classes</span>
              </div>
            </li>
            <li className="card-item">
              <div className="cards">
                <div className="triangle"></div>
                <FaLaptop className="icon" style={{ color: 'purple' }} />
                <span className="card-text">Freelancing Training</span>
              </div>
            </li>
            <li className="card-item">
              <div className="cards">
                <div className="triangle"></div>
                <FaQuestionCircle className="icon" style={{ color: 'orange' }} />
                <span className="card-text">12 Hours Doubt Support</span>
              </div>
            </li>
            <li className="card-item">
              <div className="cards">
                <div className="triangle"></div>
                <BsFillCameraFill className="icon" style={{ color: 'red' }} />
                <span className="card-text">Two years Recorded Videos</span>
              </div>
            </li>
            <li className="card-item">
              <div className="cards">
                <div className="triangle"></div>
                <FaCertificate className="icon" style={{ color: 'yellow' }} />
                <span className="card-text">Internship Certificate Programs</span>
              </div>
            </li>
            <li className="card-item">
              <div className="cards">
                <div className="triangle"></div>
                <FaCode className="icon" style={{ color: 'teal' }} />
                <span className="card-text">FullStack Development</span>
              </div>
            </li>
            <li className="card-item">
              <div className="cards">
                <div className="triangle"></div>
                <FaCode className="icon" style={{ color: 'teal' }} />
                <span className="card-text">FrontEnd Development</span>
              </div>
            </li>
            <li className="card-item">
              <div className="cards">
                <div className="triangle"></div>
                <FaCode className="icon" style={{ color: 'teal' }} />
                <span className="card-text">Backend Development</span>
              </div>
            </li>
            <li className="card-item">
              <div className="cards">
                <div className="triangle"></div>
                <FcLineChart className="icon" style={{ color: 'gray' }} />
                <span className="card-text">2-21 LPA Average Package</span>
              </div>
            </li>
            <li className="card-item">
              <div className="cards">
                <div className="triangle"></div>
                <FaUsers className="icon" style={{ color: 'brown' }} />
                <span className="card-text">120+ Students placed In TopTech Industry Same year</span>
              </div>
            </li>

            <li className="card-item">
              <div className="cards">
                <div className="triangle"></div>
                <MdReportProblem className="icon" style={{ color: 'brown' }} />
                <span className="card-text">Practical learning with 120+ problems & 12+ projects </span>
              </div>
            </li>

            <li className="card-item">
              <div className="cards">
                <div className="triangle"></div>
                <AiFillProject className="icon" style={{ color: 'brown' }} />
                <span className="card-text">Content designed by IIT & Google Scholar</span>
              </div>
            </li>


          


          </ul>
        </div>
      </div>
    </div>
  );
};

export default Join;

