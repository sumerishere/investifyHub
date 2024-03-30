import React, { useState } from "react";
import "./InvestorSignUp.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InvestorSignUp = () =>{

  const initialFormData = {
    name: "",
    mobileNo: "",
    mailId: "",
    username: "",
    password: "",
  };

  const [formErrors, setFormErrors] = useState({}); // Error messages state
  const [formData, setFormData] = useState(initialFormData); // Form data state
  const [showPassword, setShowPassword] = useState(false); // Password visibility state

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Validate the input fields
    if ( name === "mobileNo") {
      if (/^\d+$/.test(value) || value === "") {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      } else {
        setFormErrors({
          ...formErrors,
          [name]: "Please enter numbers only.",
        });
      }
    } else {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }

    // Update form data
    setFormData({
      ...formData,
      [name]: name === "startupname" ? [value] : value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  var handleSubmit = (event) => {
    event.preventDefault();

    // const requiredFields = [
    //   "name",
    //   "mobileNo",
    //   "mailId",
    //   "startupname",
    //   "investmentAmount",
    //   "username",
    //   "password",
    // ];

    // const emptyFields = requiredFields.filter((field) => !formData[field]);

    // if (emptyFields.length > 0) {
    //   setFormErrors({
    //     ...formErrors,
    //     ...emptyFields.reduce(
    //       (acc, curr) => ({ ...acc, [curr]: "This field is required." }),
    //       {}
    //     ),
    //   });
    //   return; //prevent from empty or half field store in DB.

    // } else {
      console.log("Form submitted:", formData);
      setFormData(initialFormData); // Reset form fields
      setFormErrors({}); // Clear any error messages
    // }

    fetch("http://localhost:8080/saveInvestorInfo", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Accept" : "application/json" //explicit specify 
        },
        body: JSON.stringify(formData),
  
      })

      .then((response) => {
        if (!response.ok) {
         
          throw new Error( toast.error("Failed! to Submit, Try Again",{
            position: "top-center",
            autoClose: 3000   
          }));
        }

        //-------------Pop-up-------//

         toast.success("Thank! You For Sign-Up 😊", {
          position: "top-center",
          autoClose: 5000            
         });
         // alert("saved investor data");
        return response.json(); // Parse response as JSON
          
        
      })
      .then((data) => {
          console.log("Success:", data);
          setFormData(initialFormData); // Reset form fields after successful submission
          setFormErrors({});
          //  setErrorMessage(""); // Clear any previous error messages
      })

      .catch((error) => {
        console.error("Error:", error);
        if (error.response && error.response.status === 200) {
          // Check if response exists
          error.response.text().then((text) => {
            console.log("Non-JSON response:", text); // Log non-JSON response as text
          });
        } 
        else {
          console.log("Non-JSON response: No response object available.");
        }
        //  setErrorMessage("Failed to submit form. Please try again."); // Set error message on submission failure
      });
    };


  return (
    <div>
      <ToastContainer/>
      <h2>Investor Registration Form</h2>
      <p id = "heading-sign-up-text">Note : Please! Fill The All Necessary Details Carefully.</p>
      <form className="form-container"  onSubmit={handleSubmit}>
        <label htmlFor="name">
          Investor Name<span className="required">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          required="true"
          value={formData.name}
          onChange={handleInputChange}
        />
        {formErrors.name && (
          <p style={{ color: "red" }}>{formErrors.name}</p>
        )}

        <label htmlFor="countryCode">
          Country Code<span className="required">*</span>
        </label>
        <select
          name="countryCode"
          value={formData.countryCode}
          onChange={handleInputChange}
        >
          <option value="">Select Country Code</option>
          <option value="+1">+91 (India)</option>
          <option value="+1">+1 (USA)</option>
          <option value="+44">+44 (UK)</option>

        </select>
        {formErrors.countryCode && (
          <p style={{ color: "red" }}>{formErrors.countryCode}</p>
        )}

        <label htmlFor="mobileNo">
          Investor Mobile No.<span className="required">*</span>
        </label>
        <input
          type="text"
          required="true"
          placeholder="Enter Your Mobile No."
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleInputChange}
        />
        {formErrors.mobileNo && (
          <p style={{ color: "red" }}>{formErrors.mobileNo}</p>
        )}

        <label htmlFor="mailId">
          Investor Email<span className="required">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Your Email"
          name="mailId"
          required="true"
          value={formData.mailId}
          onChange={handleInputChange}
        />
        {formErrors.mailId && (
          <p style={{ color: "red" }}>{formErrors.mailId}</p>
        )}

        {/* <label htmlFor="startupname">
          StartUp/Company Full Name<span className="required">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter StartUp/Company  Name "
          name="startupname"
          required="true"
          value={formData.startupname}
          onChange={handleInputChange}
        />
        {formErrors.startupname && (
          <p style={{ color: "red" }}>{formErrors.startupname}</p>
        )} */}

        {/* <label htmlFor="investmentAmount">
          Investment Amount<span className="required">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Amount"
          name="investmentAmount"
          required="true"
          value={formData.investmentAmount}
          onChange={handleInputChange}
        />
        {formErrors.investmentAmount && (
          <p style={{ color: "red" }}>{formErrors.investmentAmount}</p>
        )} */}

        <label htmlFor="username">
          Create New Username<span className="required">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter New Username"
          name="username"
          required="true"
          value={formData.username}
          onChange={handleInputChange}
        />
        {formErrors.username && (
          <p style={{ color: "red" }}>{formErrors.username}</p>
        )}

        <label htmlFor="password">
          Create New Password<span className="required">*</span>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter New Password"
          name="password"
          required="true"
          id="pass-id"
          value={formData.password}
          onChange={handleInputChange}
        />
        {formErrors.password && (
          <p style={{ color: "red" }}>{formErrors.password}</p>
        )}

        <input
          type="checkbox"
          id="show-password"
          onChange={handleTogglePassword}
        />
        <span id="show-pass-text">Click to Show Password</span>

        <input type="submit" value="Sign-Up" />

      </form>
    </div>
  );
}
export default InvestorSignUp;
