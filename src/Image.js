import React from 'react';
import './Image.css'; // Create this CSS file for styling

const Image = () => {
  return (
    <div className="imageCont">
      <div className="container">
        <img
          className="image"
          src="/assets/images/mali.jpg" // Ensure this path is correct
          alt="Description"
        />
      </div>
    </div>
  );
};

export default Image;
