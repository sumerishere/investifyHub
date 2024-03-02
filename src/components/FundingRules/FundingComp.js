import React from 'react'
import './FundingComp.css';
function FundingComp() {
    return (
        <div>
          <p className="heading-title" style={{textAlign:'center'}}>Let's Explore investifyHub📈</p>
    
          <div className="parent-div">
    
            <div className="container-div1">
              <p id="title-div1">Basic Rules Before Funding!</p>
              <ul className="container-ul-1">
                <li className="">
                  Research Thoroughly :- Understand the startup, its founders,
                  market, and how they address a problem.
                </li>
                <li className="">
                  Acknowledge Risks :- Be aware that startup investing is highly
                  speculative and capital loss is possible.{" "}
                </li>
                <li className="">
                  {" "}
                  Assess the Team :- Evaluate the founders' expertise, experience,
                  and commitment.
                </li>
                <li className="">
                  {" "}
                  Analyze Market Potential :- Gauge market size, growth, demand, and
                  regulatory landscape.{" "}
                </li>
                <li className="">
                  {" "}
                  Conduct Due Diligence :- Validate claims, technology, IP rights,
                  and financial health.
                </li>
                <li className="">
                  {" "}
                  Practice Patience :- Recognize that startup investments take time
                  to mature and returns may be long-term.
                </li>
              </ul>
            </div>
    
            <div className="container-div2">
    
              <ul className="container-ul-2">
    
                <p id="title-div2">
                  Steps For Investing In StartUps
                </p>
    
                <li className="">
                  Step 1: Identify a Startup for Investment: Select a startup you
                  wish to invest in.
                </li>
                <li className=""> Step 2: Review Startup Description: Carefully examine the startup's description.</li>
    
                <li className="">Step 3: Optional Research: Conduct additional research on the startup if desired. </li>
    
                <li className=""> Step 4: Complete Form with Necessary Details: Fill in required information on the provided form.</li>
                <li className=""> Step 5: Verify Investment Amount: Double-check the investment amount before submission.</li>
                <li className="">Step 6: Submit Form: Click the submit button </li>
    
                <p className="bootem-p-text">Upon submission, you'll receive a confirmation message: "Congratulations! You have successfully invested in [Startup Name]."</p>
              </ul>
              
            </div>
          </div>
        </div>
      );
}

export default FundingComp