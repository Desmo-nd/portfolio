import React from 'react';
import './Grid.css';

const Grid = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <p className="itemnum">2+</p>
        <p className="itemtext">Years of Experience</p>
      </div>
      <div className="grid-item">
        <p className="itemnum">15+</p>
        <p className="itemtext">Completed Projects</p>
      </div>
      <div className="grid-item">
        <p className="itemnum">7</p>
        <p className="itemtext">Happy Customers</p>
      </div>
      <div className="grid-item">
        <p className="itemnum">1</p>
        <p className="itemtext">Awards</p>
      </div>
    </div>
  );
};

export default Grid;
