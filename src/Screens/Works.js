import React from 'react';
import CustomNavigationBar from '../Components/CustomNavigationBar'; 
import PersonalInfo from '../Components/About/PersonalInfo'; 
import './Works.css'; 

const Works = () => {
  return (
    <div className="about-container">
      <h1 className="header">WORKS</h1>
      <div className="personal-info-container">
        <PersonalInfo />
      </div>
      <div className='navbar-container'>
        <CustomNavigationBar />
      </div>
    </div>
  );
};

export default Works;
