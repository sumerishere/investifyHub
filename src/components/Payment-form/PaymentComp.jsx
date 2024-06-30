import "./PaymentComp.css";
import { useLocation } from "react-router-dom";


const PaymentComp = () => {

  const location = useLocation();
  const investmentAmount = location.state?.investmentAmount || "0";


  const investment = parseFloat(investmentAmount) || 0;  // Ensure investmentAmount is a number
  const gstAmount = (investment * 0.05).toFixed(2);
  const platformCharge = (investment * 0.02).toFixed(2);
  const totalAmount = (parseFloat(investment ) + parseFloat(gstAmount) + parseFloat(platformCharge)).toFixed(2);

  

  return (
    <div className="payment-root">
      <div className="pay-main-container">
        <p id="payement-heading">
          ELIGIBLE <sub>pay</sub>
        </p>


        <div className="pay-left-div">
          <div className="left-top-div"></div>

          <hr />

          <div className="left-bottom-div">

            <p id="master-card"><div className="master-div" ><img className="img-master" src="/pay-card-imgs/download (2).png" alt="" /></div><input placeholder="Enter card Number eg: **0594" type="text" name="" id="master-input" /></p>

            <p id="visa-card"><div className="master-div"  >
            <img className="img-visa" src="/pay-card-imgs/download.png" alt="" />
            </div><input placeholder="Enter card Number  eg: **0594" type="text" name="" id="visa-input" /></p>
          </div>
        </div>

        <div className="pay-right-div">

        <div className="right-top-div">

            <p id="investment-amount-p">Investment Amount:</p>
            <span>${investmentAmount}</span>
            <p id="investment-amount-p">GST Amount:</p>
            <span>+ ${gstAmount}</span>
            <p id="investment-amount-p">Platform Charge:</p>
            <span>+ ${platformCharge}</span>
            <p id="investment-amount-p">Amount Deductable:</p>
            <span>$0.0</span>
            <hr id="hr-line" />
            <p id="total-amount-p">Total Amount:</p>
            <span>${totalAmount}</span>

          </div>

          <hr />

          <div className="right-bottom-div">

            <p id="bottem-div-note">Note : "Please check the all breakdown of your Amount carefully!!"</p>

          </div>

          <p id="pay-btn-p"><button id="pay-btn">Proceed to Pay</button></p>


        </div>
      </div>
    </div>
  );
};

export default PaymentComp;
