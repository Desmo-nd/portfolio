import React from 'react';
import './Home.css'; // Ensure this file has your styles
import Content from '../Components/Home/Content';
import CustomNavigationBar from '../Components/CustomNavigationBar';

const Home = () => {
  return (
    <div className="hero-slider">
      <div className="left-column">
        <div className="slide-container">
          <div className="image-container">
            <div className="glowing-balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <img src="/images/half.png" alt="Descriptive Alt Text" style={{ width: '100%', height: 'auto' }} />
          </div>
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
