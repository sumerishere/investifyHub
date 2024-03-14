import "../Invested-StartUps/InvestedStartUps.css";

const InvestedStartUps = () => {
  return (
    <div className="">
      <div className="invested-list-div">
        <div className="startup-list-container">
          <p id="header-list">Your Invested Companies Are Listed Here</p>
          <div className="startup-lists">
            <ul className="startup-list-ul">
              <li id="li-starup">RazorPay</li>
              <li className="">intello-Lab</li>
              <li className="">PharmaEasy</li>
              <li className="">Skyroot</li>
              <li className="">Swiggy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestedStartUps;
