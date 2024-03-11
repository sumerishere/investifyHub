import React, { useState } from "react";
import './InvestorSignUp.css'


function InvestorSignUp() {
    const initialFormData = {
        investorId: "",
        investorName: "",
        investorEmail: "",
        investorMobileNo: "",
        investorPanId: "",
        startupName: "",
        username: "",
        password: "",
        profileImage: "",
      };
    
      const [errorMessage, setErrorMessage] = useState(""); // Error message state
      const [formData, setFormData] = useState(initialFormData); // Form data state
      const [showPassword, setShowPassword] = useState(false); // Password visibility state
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleTogglePassword = () => {
        setShowPassword(!showPassword);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        fetch("http://localhost:8080/investorInfo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            setFormData(initialFormData); // Reset form fields after successful submission
            setErrorMessage(""); // Clear any previous error messages
          })
          .catch((error) => {
            console.error("Error:", error);
            setErrorMessage("Failed to submit form. Please try again."); // Set error message on submission failure
          });
      };
    
      return (
        <div>
          <h2>Investor Registration Form</h2>
    
          <form className="form-container" onSubmit={handleSubmit}>
          
            <label htmlFor="investorName">Investor Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="investorName"
              id="name-id"
              value={formData.investorName}
              onChange={handleInputChange}
            />
    
            <label htmlFor="investorMobileNo">Investor Mobile No.</label>
            <input
              type="text"
              placeholder="Enter Your Mobile No."
              name="investorMobileNo"
              id="mobile-id"
              value={formData.investorMobileNo}
              onChange={handleInputChange}
            />
    
            <label htmlFor="investorEmail">Investor Email</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              name="investorEmail"
              id="email-id"
              value={formData.investorEmail}
              onChange={handleInputChange}
            />
    
            <label htmlFor="investorPanId">Investor Pan-Id</label>
            <input
              type="text"
              placeholder="Enter Your Pan-Id"
              name="investorPanId"
              id="pan-id"
              value={formData.investorPanId}
              onChange={handleInputChange}
            />
    
            <label htmlFor="startupName">StartUp/Company Name</label>
            <input
              type="text"
              placeholder="Enter StartUp/Company  Name "
              name="startupName"
              id="startup-name-id"
              value={formData.startupName}
              onChange={handleInputChange}
            />
    
            <label htmlFor="investmentAmount">Investment Amount</label>
            <input
              type="text"
              placeholder="Enter Amount"
              name="investmentAmount"
              id="amount-id"
              value={formData.investmentAmount}
              onChange={handleInputChange}
            />
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    
            <label htmlFor="username">Create Username</label>
            <input
              type="text"
              placeholder="Enter New Username"
              name="username"
              id="username-id"
              value={formData.username}
              onChange={handleInputChange}
            />
    
            <label htmlFor="password">Create Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter New Password"
              name="password"
              id="pass-id"
              value={formData.password}
              onChange={handleInputChange}
            />
    
            <input
              type="checkbox"
              id="show-password"
              onChange={handleTogglePassword}
            />
            <label htmlFor="show-password">Click to Show Password</label>
    
            <label htmlFor="profileImage">Profile Image</label>
            <input
              type="file"
              placeholder="Add Your Picture"
              name="profileImage"
              id="pic-id"
              onChange={handleInputChange}
            />
    
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
}

export default InvestorSignUp
