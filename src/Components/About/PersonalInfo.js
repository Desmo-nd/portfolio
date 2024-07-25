import React from 'react';
import './PersonalInfo.css'; // Create a PersonalInfo.css file for your styles
import DownloadCV from '../Home/DownloadCV'; // Make sure this component is compatible with React.js

const PersonalInfo = () => {
    return (
        <div className="container">
            <div className="info-cont">
                <div className="left">
                    <h2 className="modal-subheader">PERSONAL INFO</h2>

                    <p className="modal-text">First Name: <span className="modal-answer">Desmond</span></p>
                    <p className="modal-text">Age: <span className="modal-answer">23</span></p>
                    <p className="modal-text">Phone: <span className="modal-answer">+254 740 524 75</span></p>
                    <p className="modal-text">GitHub: <span className="modal-answer">Desmo-nd</span></p>
                </div>
                <div className="right">
                    <p className="modal-text" style={{ marginTop: '50px' }}>Last Name: <span className="modal-answer">Mwirigi</span></p>
                    <p className="modal-text">Country: <span className="modal-answer">Kenya</span></p>
                    <p className="modal-text">Email: <span className="modal-answer">mwirgdesmon@gmail.com</span></p>
                    <p className="modal-text">LinkedIn: <span className="modal-answer">DesmondMwirigi</span></p>
                </div>
            </div>
            <DownloadCV />
        </div>
    );
};

export default PersonalInfo;
