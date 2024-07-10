import React, { useState } from 'react';
import Alert from './AlertComp/AlertComp.jsx';
import "../alert-comp/SubmitBtnComp.css";


const SubmitCompo = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    // Show the alert message
    setShowAlert(true);

    // Hide the alert message after a delay (optional)
    // setTimeout(() => {
    //   setShowAlert(false);
    // }, 5000);
  };

  return (
    <div className="root-submit-btn">
      <h2>Form Submission</h2>

      <div className="alert-btn-div-submit">
        <button id="alert-submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {showAlert && <Alert message="Saved successfully!!" onClose={() => setShowAlert(false)} />}
    </div>
  );
};

export default SubmitCompo;