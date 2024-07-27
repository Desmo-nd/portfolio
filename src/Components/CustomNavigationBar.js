import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMoon, FaHome, FaUser, FaSchool, FaImage, FaPaperPlane } from 'react-icons/fa';
import './CustomNavigationBar.css'; 

const CustomNavigationBar = () => {
  const navigate = useNavigate();
  const [lightMode, setLightMode] = useState(true);

  const toggleMode = () => {
    setLightMode(!lightMode); 
  };

  return (
    <div className={`Contdess ${lightMode ? 'lightMode' : 'nightMode'}`}>
      <div className="iconContainer" onClick={toggleMode}>
        <FaMoon size={24} color="white" />
      </div>
      <div className="iconContainer" onClick={() => navigate('/home')}>
        <FaHome size={24} color="white" />
      </div>
      <div className="iconContainer" onClick={() => navigate('/aboutme')}>
        <FaUser size={24} color="white" />
      </div>
      <div className="iconContainer" onClick={() => navigate('/Skills')}>
        <FaSchool size={24} color="white" />
      </div>
      <div className="iconContainer" onClick={() => navigate('/image')}>
        <FaImage size={24} color="white" />
      </div>
      <div className="iconContainer" onClick={() => navigate('/send')}>
        <FaPaperPlane size={24} color="white" />
      </div>
    </div>
  );
};

export default CustomNavigationBar;
