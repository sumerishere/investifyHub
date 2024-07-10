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

const Alert = ({ message, onClose }) => {
  return (
    <div className="alert-overlay">
      <div className="alert-box">

          {/* Checkmark Circle */}
          <div className="checkmark-circle">
            <svg id="checkmark-svg-id" viewBox="0 0 16 16" className="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M13.854 4.146a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L6 11.293l7.646-7.647a.5.5 0 0 1 .708 0z"/>
            </svg>
          </div>
          {/* End of Checkmark Circle */}
          
          <p>{message}</p>
          <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Alert;