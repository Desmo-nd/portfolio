import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home'; // Adjust import path as necessary
// import AboutMe from './screens/AboutMe'; // Adjust import path as necessary
import CustomNavigationBar from './Components/CustomNavigationBar'; // Adjust import path as necessary

const App = () => {
  return (
    <Router>
      <div className="App">
        <CustomNavigationBar /> {/* This would be your custom navigation bar if you want to include it */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about-me" element={<AboutMe />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
