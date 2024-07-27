import React from 'react';
import CustomNavigationBar from '../Components/CustomNavigationBar'; 
import PersonalInfo from '../Components/Skills/SkillsInfo'; 
import './Skills.css'; 

const Skills = () => {
  return (
    <div className="about-container">
      <h1 className="header">JOURNEY</h1>
      <div className="personal-info-container">
        <PersonalInfo />
      </div>
      <div className='navbar-container'>
        <CustomNavigationBar />
      </div>
    </div>
  );
};

export default Skills;
