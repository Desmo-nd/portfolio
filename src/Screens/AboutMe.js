import React from 'react';
import CustomNavigationBar from '../Components/CustomNavigationBar'; // Adjust import path as necessary
import PersonalInfo from '../Components/About/PersonalInfo'; // Adjust import path as necessary
import Grid from '../Components/About/Grid'; // Adjust import path as necessary
import './AboutMe.css'; // Import CSS file

const AboutMe = () => {
  return (
    <div className="container">
      <h1 className="modalHeader">ABOUT <span style={{color: '#73BE64'}}>ME</span></h1>
      <div className="gridCont">
        <PersonalInfo />
        <Grid />
      </div>
      <CustomNavigationBar />
    </div>
  );
};

export default AboutMe;
