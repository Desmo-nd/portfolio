import React from 'react';
import './Home.css'; // Create a Home.css file for your styles
import Image from '../Components/Home/Image';
import Content from '../Components/Home/Content';
import CustomNavigationBar from '../Components/CustomNavigationBar';

const Home = () => {
  return (
    <div className="hero-slider">
      <div className="slide"></div>
      <div className="left-slide">
        <Image />
        <div className="content-cont">
          <Content />
        </div>
      </div>
      <CustomNavigationBar/>
    </div>
  );
};

export default Home;