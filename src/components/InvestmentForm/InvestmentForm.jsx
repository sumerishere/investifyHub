import "../InvestmentForm/InvestmentForm.css";
// import { Link } from "react-router-dom";

import { useState } from "react";

const InvestmentForm = () => {

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div>
       <p id= "heading-textt">"Welcome, Investor Name! Expand Your Portfolio : Diversify Your Investments! 😉"</p>
       <form className="form-container" id="form-size" >
       <label htmlFor="startupname">
          StartUp/Company Full Name<span className="required">*</span>
        </label>

        <input
          type="text"
          placeholder="Enter StartUp/Company  Name "
          name="startupname"
          required="true"
        />

      
        <label htmlFor="investmentAmount">
          Investment Amount<span className="required">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Amount"
          name="investmentAmount"
          required="true"
         
        />
       
        <label htmlFor="username">
          Username<span className="required">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter New Username"
          name="username"
          required="true"
        
        />
    
        <label htmlFor="password">
          Password<span className="required">*</span>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter New Password"
          name="password"
          required="true"
          id="pass-id"
        />
        <input
          type="checkbox"
          id="show-password"
          onChange={handleTogglePassword}
        />
        <span id="show-pass-text">Click to Show Password</span>

        <input id = "submit-color" type="submit" value="Ready! To Invest" />

      </form>
    </div>
  );
}

export default InvestmentForm;