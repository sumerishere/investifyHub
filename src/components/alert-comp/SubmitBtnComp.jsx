import React, { useState } from 'react';
import Alert from './AlertComp/AlertComp.jsx';
import "../alert-comp/SubmitBtnComp.css";
import { message } from 'antd';


const SubmitCompo = ({message}) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    // Show the alert message
    setShowAlert(true);

    // Hide the alert message after a delay (optional)
    // setTimeout(() => {
    //   setShowAlert(false);
    // }, 3000);
  };

  return (
    <div className="root-submit-btn">
      <h2>Form Submission</h2>

      <div className="alert-btn-div-submit">
        <button id="alert-submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {showAlert && <Alert message={message} onClose={() => setShowAlert(false)} />}
    </div>
  );
};

export default SubmitCompo;