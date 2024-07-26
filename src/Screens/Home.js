import React from 'react';
import './Home.css'; // Ensure this file has your styles
import Image from '../Components/Home/Image';
import Content from '../Components/Home/Content';
import CustomNavigationBar from '../Components/CustomNavigationBar';

const Home = () => {
  return (
    <div className="hero-slider">
      <div className="left-column">
        <div className="slide-container">
          <Image />
          <div className="slide"></div>
        </div>
      </div>
      <div className="center-column">
        <Content />
      </div>
        <CustomNavigationBar />
    </div>
  );
};

export default Home;
