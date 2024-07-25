import "../Login/AlertLogin.css";

const AlertLoginComp = ({ onClose }) => {
  return (
    <div className="alert-root-div">
      <div className="login-alert">
        <div className="login-alert-symbol">⚠️</div>
        <div className="login-alert-message">
          Opps..! it's looks like you didn't invest yet 🥲 <br />
          <p id="login-alert-note">
            Note: " Before Login into the portfolio first you have to invest at
            least in one company so you can see the status of your investment. "
          </p>
        </div>
        <button className="login-alert-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AlertLoginComp;
