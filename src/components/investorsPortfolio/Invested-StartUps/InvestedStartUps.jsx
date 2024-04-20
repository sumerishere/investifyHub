import { json } from "react-router-dom";
import "../Invested-StartUps/InvestedStartUps.css";

const InvestedStartUps = ({ jsondata }) => {
  // console.log("---------------------" + jsondata[0].startupname);
  return (
    <div className="">
      <div className="invested-list-div">
        <div className="startup-list-container">
          <p id="header-list">Your Invested Companies Are Listed Here</p>
          <div className="startup-lists">
            <ul className="startup-list-ul">
              {jsondata.map((value, index) => (
                <li>{value.startupname}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestedStartUps;
