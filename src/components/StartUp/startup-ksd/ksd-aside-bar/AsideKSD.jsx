import React from "react";
import "../ksd-aside-bar/AsideKSD.css";
import { Link } from "react-router-dom";

const AsideKsd = ({ open }) => {
  return (
    <div>
      <div className={open ? "aside-bar-ksd collapse" : "aside-bar-ksd"}>
        <h1 id="KSD-h1">What is KSD?</h1>
        <h5 id="KSD-h5">{`KSD is Knowledge sharing document (investifyHub📈)`}</h5>

        <div className="ksd-info">
          <p id="ksd-info-p">
            At InvestifyHub, we believe in the power of shared knowledge. Our
            Knowledge Sharing Document (KSD) is designed to provide
            comprehensive information about our platform, including best
            practices, troubleshooting guides, and more.
          </p>

          <p id="startup-section-p">StartUp Section :</p>

          <p id="how-to-register-startup">
            HOW <span id="how-text-span">to Register Starup ?</span>
          </p>

          <div className="ksd-images">
            <img
              id="startup-btn-img-id"
              src="/ksd-images/startup-registration-button-img.png"
              alt="Placeholder 1"
            />

            <img
              id="form-img-id"
              src="/ksd-images/startup-registration-form.png"
              alt="Placeholder 2"
            />
          </div>

          <div className="guide-process-ksd">
            <p id="guide-proces-p">Guide Process</p>
            <ol>
              <li>Step 1: Introduction to InvestifyHub</li>
              <li>Step 2: Creating and Managing Investments</li>
              <li>Step 3: Analyzing Investment Performance</li>
              <li>Step 4: Frequently Asked Questions</li>
              <li>Step 5: Support and Resources</li>
            </ol>
          </div>
        </div>

        {/* KSD for investor  */}

        <div className="investor-ksd-div ksd-images">
          <p id="investor-ksd-div-p">Investor Section :</p>

          <p id="investor-ksd-text">
            <p id="investor-info-p">Step by step guide for investor :</p>
          </p>

          <span id="steps-span">1. Step : go to Sign-Up</span>
          <img src="/ksd-images/investor-sign-up-form.png" alt="" />

          <span id="steps-span">
              2. Step : go to "Start Investing" and pick one startup as you
              wish.
          </span>

          <img src="/ksd-images/pick-startup-img.png" alt="img" />

          <span id="steps-span">
              3. Step : After choosing startup check Overview of startup before Investing.
          </span>
          <img src="/ksd-images/startup-overview-img.png" alt="img" />

          <span id="steps-span">
              4. Step : After checking startup then go for "Get Equity Button" you will get form.
          </span>

          <img src="/ksd-images/investment-form-img.png" alt="" />
          
          <p id="steps-5-p">
              5. Final Step : After successfully! investment😊 You will get notify and Aknowledgement mail. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AsideKsd;
