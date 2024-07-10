// import React from 'react';
// import './AlertComp.css';

// const SaveSuccess = () => {
//   return (
//     <div className='root-container-show'>
//       <div className="alert-div-container">
//         <div className="circle">
//           <span className="checkmark">✔</span>
//         </div>
//         <p className="message">Saved successfully</p>
//       </div>
//     </div>
//   );
// };

// export default SaveSuccess;

import "../AlertComp/AlertComp.css";

const Alert = ({ message, onClose, isDataPresent }) => {

  return (

    <div className="alert-overlay">
      <div className="alert-box">

      <div className={!isDataPresent ? "checkmark-circle" : "alert-circle"}>
          {!isDataPresent ? (
            <svg
              id="checkmark-svg-id"
              viewBox="0 0 16 16"
              className="bi bi-check"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M13.854 4.146a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L6 11.293l7.646-7.647a.5.5 0 0 1 .708 0z"
              />
            </svg>
          ) : (
            <svg
              id="alert-svg-id"
              viewBox="0 0 16 16"
              className="bi bi-exclamation-triangle"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.938 1.016a1.13 1.13 0 0 1 2.124 0l6.857 12.28c.457.817-.091 1.704-.977 1.704H2.057c-.885 0-1.434-.887-.977-1.704L7.938 1.016zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0l-.35-3.507A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>
          )}
        </div>
          
        <p>{ !isDataPresent ? message = "Saved Successfully!" : "Already LOB Name Existing"}</p>
        <button onClick={onClose}>Close</button>

      </div>
    </div>
  );
};

export default Alert;