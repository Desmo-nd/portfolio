import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home'; 
import AboutMe from './Screens/AboutMe'; 
import Skills from './Screens/Skills';
import Works from './Screens/Works';
import CustomNavigationBar from './Components/CustomNavigationBar'; 
import './fonts.css'; // Import custom fonts CSS

const App = () => {
  return (
    <Router>
      <div className="App">
        <CustomNavigationBar /> {/* This would be your custom navigation bar if you want to include it */}
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Works" element={<Works />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
