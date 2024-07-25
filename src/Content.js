import React, { useState } from 'react';
import './Content.css';
import DownloadCv from './DownloadCVButton';

const Content = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">I'm Desmond Murangiri</h1>
        <h1 className="title">I'm a Software Engineer</h1>

        <p className="subhead">
          I am a software engineer with a passion for technology and 
          innovation. I am constantly seeking opportunities to advance 
          my skills and build a solid foundation for my career in the 
          technology sector.
        </p>
        <button onClick={openModal} className="button">
          MORE ABOUT ME
        </button>
      </div>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="modal-header">ABOUT <span className="highlight">ME</span></h2>
            <h3 className="modal-subheader">PERSONAL INFO</h3>
            <div className="info-cont">
              <div className="left">
                <p className="modal-text">First Name: <span className="modal-answer">Desmond</span></p>
                <p className="modal-text">Age: <span className="modal-answer">23</span></p>
                <p className="modal-text">Phone: <span className="modal-answer">+254 740 524 75</span></p>
                <p className="modal-text">GitHub: <span className="modal-answer">Desmo-nd</span></p>
              </div>
              <div className="right">
                <p className="modal-text">Last Name: <span className="modal-answer">Mwirigi</span></p>
                <p className="modal-text">Country: <span className="modal-answer">Kenya</span></p>
                <p className="modal-text">Email: <span className="modal-answer">mwirgdesmon@gmail.com</span></p>
                <p className="modal-text">LinkedIn: <span className="modal-answer">DesmondMwirigi</span></p>
              </div>
            </div>
            <DownloadCv />
            <div className="grid">
              <div className="grid-item">
                <p className="item-num">2+</p>
                <p className="item-text">Years of Experience</p>
              </div>
              <div className="grid-item">
                <p className="item-num">15+</p>
                <p className="item-text">Completed Projects</p>
              </div>
              <div className="grid-item">
                <p className="item-num">7</p>
                <p className="item-text">Happy Customers</p>
              </div>
              <div className="grid-item">
                <p className="item-num">1</p>
                <p className="item-text">Awards</p>
              </div>
            </div>
            <button onClick={closeModal} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
