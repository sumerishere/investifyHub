import "../infoContainer/InfoContainer.css";

const InfoContainer = () => {
  return (
    <div className="root-divv">
      <div className="info-container">

        <p id="welcome-msg">Welcome! to Start-Ups Elevator (investifyHub📈)</p>

        

        <div className="text-info-container">

          <p id="info-header">
            Fundraising on investifyHub📈 is easy, powerful, and trusted.
          </p>

          <p className="text-info-p">
            Get what you need to help your fundraiser succeed on investifyHub,
          </p>

          <p className="text-info-p">
            With no fee to start, investifyHub is the world’s leading
            crowdfunding! platform.
          </p>
        </div>

        
      </div>

      <div className="startup-signing-text-div">
          <p id = "startup-signing-text">Start funding for your startup today by signing up with <span id="title-span-p">investifyHub📈</span> and unleash your creativity! </p>
      </div>
    </div>
  );
};

export default InfoContainer;
