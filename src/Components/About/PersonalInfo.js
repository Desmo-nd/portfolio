import React from 'react';
import './PersonalInfo.css';
import DownloadCV from '../Home/DownloadCVButton'; 
import Grid from './Grid';

const PersonalInfo = () => {
  return (
    <div className='personal-info-wrapper'>
        <h1 className="modalHeader">ABOUT <span style={{color: '#ff6347'}}>ME</span></h1>
        <div className='All'>
            <div className="contain">
                <div className="content">
                <h2 className="modalsubheader">PERSONAL INFO</h2>

                <div className="info-cont">
                    <div className="left">
                        <p className="modaltext">First Name: <span className="modal-answer">Desmond</span></p>
                        <p className="modaltext">Age: <span className="modal-answer">23</span></p>
                        <p className="modaltext">Phone: <span className="modal-answer">+254 740 524 75</span></p>
                        <p className="modaltext">GitHub: <span className="modal-answer">Desmo-nd</span></p>
                    </div>
                    <div className="right">
                        <p className="modaltext" >Last Name: <span className="modal-answer">Mwirigi</span></p>
                        <p className="modaltext">Country: <span className="modal-answer">Kenya</span></p>
                        <p className="modaltext">Email: <span className="modal-answer">@gmail.com</span></p>
                        <p className="modaltext">LinkedIn: <span className="modal-answer">DesmondMwirigi</span></p>
                    </div>   
                </div>
                
                </div>
            </div>
            <Grid />
        </div>
        <div className="downloadcv">
            <DownloadCV />
        </div>
    </div>
  );
};

export default PersonalInfo;
