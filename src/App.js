import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home'; // Adjust import path as necessary
import AboutMe from './Screens/AboutMe'; // Adjust import path as necessary
import CustomNavigationBar from './Components/CustomNavigationBar'; // Adjust import path as necessary
import './fonts.css'; // Import custom fonts CSS

const App = () => {
  return (
    <Router>
      <div className="App">
        <CustomNavigationBar /> {/* This would be your custom navigation bar if you want to include it */}
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
