import React from 'react';
import './AlertComp.css';

const SaveSuccess = () => {
  return (
    <div className='root-container-show'>
      <div className="container">
        <div className="circle">
          <span className="checkmark">✔</span>
        </div>
        <p className="message">Saved successfully</p>
      </div>
    </div>
  );
};

export default SaveSuccess;
