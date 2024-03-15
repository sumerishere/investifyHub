import React, { useState } from "react";
import "./InvestorSignUp.css";

function InvestorSignUp() {
  const initialFormData = {
    investorName: "",
    investorMobileNo: "",
    investorEmail: "",
    startupName: "",
    investmentAmount: "",
    username: "",
    password: "",
  };

  const [formErrors, setFormErrors] = useState({}); // Error messages state
  const [formData, setFormData] = useState(initialFormData); // Form data state
  const [showPassword, setShowPassword] = useState(false); // Password visibility state

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Validate the input fields
    if (name === "investmentAmount" || name === "investorMobileNo") {
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
      [name]: value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requiredFields = [
      "investorName",
      "investorMobileNo",
      "investorEmail",
      "startupName",
      "investmentAmount",
      "username",
      "password",
    ];

    const emptyFields = requiredFields.filter((field) => !formData[field]);

    if (emptyFields.length > 0) {
      setFormErrors({
        ...formErrors,
        ...emptyFields.reduce(
          (acc, curr) => ({ ...acc, [curr]: "This field is required." }),
          {}
        ),
      });
      return; //prevent from empty or half field store in DB.

    } else {
      console.log("Form submitted:", formData);
      setFormData(initialFormData); // Reset form fields
      setFormErrors({}); // Clear any error messages
    }

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
          throw new Error("Failed to submit form. Try Again");
        }
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
        } else {
          console.log("Non-JSON response: No response object available.");
        }
        //  setErrorMessage("Failed to submit form. Please try again."); // Set error message on submission failure
      });
  };

  return (
    <div>
      <h2>Investor Registration Form</h2>
      <form className="form-container" onSubmit={handleSubmit}>

        <label htmlFor="investorName">
          Investor Name<span className="required">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="investorName"
          value={formData.investorName}
          onChange={handleInputChange}
        />
        {formErrors.investorName && (
          <p style={{ color: "red" }}>{formErrors.investorName}</p>
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

        <label htmlFor="investorMobileNo">
          Investor Mobile No.<span className="required">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Your Mobile No."
          name="investorMobileNo"
          value={formData.investorMobileNo}
          onChange={handleInputChange}
        />
        {formErrors.investorMobileNo && (
          <p style={{ color: "red" }}>{formErrors.investorMobileNo}</p>
        )}

        <label htmlFor="investorEmail">
          Investor Email<span className="required">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Your Email"
          name="investorEmail"
          value={formData.investorEmail}
          onChange={handleInputChange}
        />
        {formErrors.investorEmail && (
          <p style={{ color: "red" }}>{formErrors.investorEmail}</p>
        )}

        <label htmlFor="startupName">
          StartUp/Company Full Name<span className="required">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter StartUp/Company  Name "
          name="startupName"
          value={formData.startupName}
          onChange={handleInputChange}
        />
        {formErrors.startupName && (
          <p style={{ color: "red" }}>{formErrors.startupName}</p>
        )}

        <label htmlFor="investmentAmount">
          Investment Amount<span className="required">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Amount"
          name="investmentAmount"
          value={formData.investmentAmount}
          onChange={handleInputChange}
        />
        {formErrors.investmentAmount && (
          <p style={{ color: "red" }}>{formErrors.investmentAmount}</p>
        )}

        <label htmlFor="username">
          Create Username<span className="required">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter New Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        {formErrors.username && (
          <p style={{ color: "red" }}>{formErrors.username}</p>
        )}

        <label htmlFor="password">
          Create Password<span className="required">*</span>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter New Password"
          name="password"
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

//---------------------------------------------------------------------//

// function InvestorSignUp() {
//     const initialFormData = {
//         // investorId: "",
//         investorName: "",
//         investorEmail: "",
//         investorMobileNo: "",
//         // investorPanId: "",
//         startupName: "",
//         investmentAmount: "",
//         username: "",
//         password: "",
//         // profileImage: "",
//       };

//       const [errorMessage, setErrorMessage] = useState(""); // Error message state
//       const [formData, setFormData] = useState(initialFormData); // Form data state
//       const [showPassword, setShowPassword] = useState(false); // Password visibility state

//       // const handleInputChange = (event) => {
//       //   const { name, value } = event.target;

//       //   setFormData({
//       //     ...formData,
//       //     [name]: value,
//       //   });

//       // };

//       const handleInputChange = (event) => {
//         const { name, value } = event.target;

//         if (name === "investmentAmount" || name==="investorMobileNo") {
//           // Check if the entered value contains only digits
//           if (/^\d+$/.test(value) || value === "") {
//             setFormData({
//               ...formData,
//               [name]: value,
//             });
//             setErrorMessage(""); // Clear any previous error messages
//           } else {
//             // Display error message for invalid input
//             setErrorMessage("Please enter digits only for Investment Amount");
//           }
//         } else {
//           // For other fields, update the form data directly
//           setFormData({
//             ...formData,
//             [name]: value,
//           });
//           setErrorMessage(""); // Clear any previous error messages
//         }
//       };

//       const handleTogglePassword = () => {
//         setShowPassword(!showPassword);
//       };

//       // const handleSubmit = (event) => {
//       //   event.preventDefault();

//       //   fetch("http://localhost:8080/investorInfo", {
//       //     method: "POST",
//       //     headers: {
//       //       "Content-Type": "application/json",
//       //     },
//       //     body: JSON.stringify(formData),
//       //   })
//       //     .then((response) => response.json())
//       //     .then((data) => {
//       //       console.log("Success:", data);
//       //       setFormData(initialFormData); // Reset form fields after successful submission
//       //       setErrorMessage(""); // Clear any previous error messages
//       //     })
//       //     .catch((error) => {
//       //       console.error("Error:", error);
//       //       setErrorMessage("Failed to submit form. Please try again."); // Set error message on submission failure
//       //     });

//       };

//       return (
//         <div>
//           <h2>Investor Registration Form</h2>

//           <form className="form-container" onSubmit={handleSubmit}>

//             <label htmlFor="investorName">Investor Name</label>
//             <input
//               type="text"
//               placeholder="Enter Your Name"
//               name="investorName"
//               id="name-id"
//               value={formData.investorName}
//               onChange={handleInputChange}
//             />

//             <label htmlFor="investorMobileNo">Investor Mobile No.</label>
//             <input
//               type="text"
//               placeholder="Enter Your Mobile No."
//               name="investorMobileNo"
//               id="mobile-id"
//               value={formData.investorMobileNo}
//               onChange={handleInputChange}
//             />

//             <label htmlFor="investorEmail">Investor Email</label>
//             <input
//               type="text"
//               placeholder="Enter Your Email"
//               name="investorEmail"
//               id="email-id"
//               value={formData.investorEmail}
//               onChange={handleInputChange}
//             />

//             {/* <label htmlFor="investorPanId">Investor Pan-Id</label>
//             <input
//               type="text"
//               placeholder="Enter Your Pan-Id"
//               name="investorPanId"
//               id="pan-id"
//               value={formData.investorPanId}
//               onChange={handleInputChange}
//             />
//      */}
//             <label htmlFor="startupName">StartUp/Company Full Name</label>
//             <input
//               type="text"
//               placeholder="Enter StartUp/Company  Name "
//               name="startupName"
//               id="startup-name-id"
//               value={formData.startupName}
//               onChange={handleInputChange}
//             />

//             <label htmlFor="investmentAmount">Investment Amount</label>
//             <input
//               type="text"
//               placeholder="Enter Amount"
//               name="investmentAmount"
//               id="amount-id"
//               value={formData.investmentAmount}
//               onChange={handleInputChange}
//             />
//             {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//             <label htmlFor="username">Create Username</label>
//             <input
//               type="text"
//               placeholder="Enter New Username"
//               name="username"
//               id="username-id"
//               value={formData.username}
//               onChange={handleInputChange}
//             />

//             <label htmlFor="password">Create Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter New Password"
//               name="password"
//               id="pass-id"
//               value={formData.password}
//               onChange={handleInputChange}
//             />

//             <input
//               type="checkbox"
//               id="show-password"
//               onChange={handleTogglePassword}
//             /> <span id = "show-pass-text" >Click to Show Password</span>

//             {/* <label htmlFor="profileImage">Profile Image</label>
//             <input
//               type="file"
//               placeholder="Add Your Picture"
//               name="profileImage"
//               id="pic-id"
//               onChange={handleInputChange}
//             /> */}
//             <input type="submit" value="Sign-Up" />
//             {/* {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} */}
//           </form>
//         </div>
//       );
// }

// export default InvestorSignUp
