import React from 'react';
import './DownloadCVButton.css'; // Create this CSS file for styling

const DownloadCVButton = () => {
  const handleDownloadCV = () => {
    const cvPath = '/assets/CV.pdf'; // Make sure the path is correct for your public directory

    window.open(cvPath, '_blank')
      .catch((error) => console.error("Error downloading file:", error));
  };

  return (
    <div className="container">
      <button onClick={handleDownloadCV} className="button">
        Download CV
      </button>
    </div>
  );
};

export default DownloadCVButton;
