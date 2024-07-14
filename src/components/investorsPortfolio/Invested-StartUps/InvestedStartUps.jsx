import { json } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Invested-StartUps/InvestedStartUps.css";

const InvestedStartUps = ({ jsondata }) => {
  const [totalSumINR, setTotalSumINR] = useState(0);
  const [totalSumUSD, setTotalSumUSD] = useState(0);

  useEffect(() => {
    let sumINR = 0;

    jsondata.forEach((value) => {
      // Remove commas and convert investmentAmount to integer before adding
      sumINR += parseInt(value.investmentAmount.replace(/,/g, ""));
    });
    setTotalSumINR(sumINR);

    // Convert INR to USD using a fixed exchange rate
    const exchangeRate = 0.013; // Example: 1 INR = 0.013 USD
    const sumUSD = sumINR * exchangeRate;
    setTotalSumUSD(sumUSD);
  }, [jsondata]);

  // Function to format currency as INR
  const formatCurrencyINR = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  };

  // Function to format currency as USD
  const formatCurrencyUSD = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <div className="">
      <div className="invested-list-div">
        <div className="startup-list-container">
          <p id="header-list">Your Invested! Companies Are Listed Here</p>
          <div className="startup-lists">
            <ul className="startup-list-ul">
              {jsondata.map((value, index) => (
                <li
                  key={index}
                >{`${value.startupname} :- ${value.investmentAmount}`}</li>
              ))}
            </ul>
          </div>

          <div className="total-amount">
            <div id="amt-container">

              <p id="total-value">Number of Invested Companies : {jsondata.length}
              </p>

              <p id="total-value">
                Total Invested Amount In INR : {formatCurrencyINR(totalSumINR)}
              </p>

              <p id="total-value">
                Total Invested Amount In USD : {formatCurrencyUSD(totalSumUSD)}
              </p>

              <p id = "consider-value">
                Note : consider value of 1 INR = 0.013 USD.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestedStartUps;
