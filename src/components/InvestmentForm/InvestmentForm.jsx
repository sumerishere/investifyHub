import "../InvestmentForm/InvestmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link,useLocation } from "react-router-dom";
import { useState } from "react";
import { RotatingLines } from 'react-loader-spinner';


const InvestmentForm = () => {

  const location = useLocation();
  const defaultStartupName = location.state?.startupname || ""; // Retrieve startupname from state or set default
  
  const initialFormData = {

    startupname: defaultStartupName,  // Set the default startup name
    investmentAmount: "",
    username: "",
    password: "",
  };

  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState(initialFormData);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage loading spinner

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "investmentAmount") {

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

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true); // Start spinner on form submission

    setFormData(initialFormData);
    setFormErrors({});


    fetch("http://localhost:8080/add-startup", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    
      .then((response) => {
        setLoading(false); // Stop spinner after response
        if (!response.ok) {
          toast.error("Failed!!! to Submit, Try Again", {
            position: "top-center",
            autoClose: 3000,
          });
          console.log("failed submission : ",formData);
          throw new Error("Failed! to Submit, Try Again");
          
        }

        toast.success(`Congratulations! On Your Investment 😊`, {
          position: "top-center",
          autoClose: 5000,
        });

        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        setFormData(initialFormData);
        setFormErrors({});
      })

      .catch((error) => {
        setLoading(false); // Stop spinner on error
        // console.error("Error:", error);
        console.log("failed to save : ",formData);

        // toast.error("Failed!!! to Submit, Try Again", {
        //   position: "top-center",
        //   autoClose: 3000,
        // });
      });
  };

  return (
    <div>
      <ToastContainer />
      <p id="heading-textt">
        "Welcome! Dear A Great Future Ahead, Let's Expand Your Portfolio : Diversify Your
        Investments!! 😉"
      </p>
      <form className="form-container" id="form-size" onSubmit={handleSubmit}>
        <label htmlFor="startupname">
          StartUp/Company Full Name<span className="required">*</span>
        </label>

        <input
          type="text"
          placeholder="Enter StartUp/Company  Name "
          name="startupname"
          required={true}
          value={formData.startupname}
          onChange={handleInputChange}
          readOnly
        />

        <label htmlFor="investmentAmount">
          Investment Amount<span className="required">*</span>
          <p id="amount-enter-note">note : "enter amount carefully."</p>
        </label>
        <input
          type="text"
          placeholder="Enter Amount"
          name="investmentAmount"
          value={formData.investmentAmount}
          required={true}
          onChange={handleInputChange}
        />
        {formErrors.investmentAmount && (
          <p style={{ color: "red" }}>{formErrors.investmentAmount}</p>
        )}

        <label htmlFor="username">
          Username<span className="required">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter New Username"
          name="username"
          required={true}
          value={formData.username}
          onChange={handleInputChange}
        />

        <label htmlFor="password">
          Password<span className="required">*</span>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter New Password"
          name="password"
          required={true}
          id="pass-id"
          value={formData.password}
          onChange={handleInputChange}
        />
        <input
          type="checkbox"
          id="show-password"
          onChange={handleTogglePassword}
        />
        <span id="show-pass-text">Click to Show Password</span>

        <p id="p-sign-up">
          For new user -
          <span id="sign-upp">
            <Link
              to="/InvestorSignUp"
              style={{ textDecoration: "none", color: "blue" }}
            >
              Sign-Up
            </Link>
          </span>
        </p>

        <input id="submit-color" type="submit" value="Ready! To Invest" disabled={loading} />
      </form>

      {loading && (
        <div className="spinner">
          <RotatingLines width="100" />
        </div>
      )}
      
    </div>
  );
};

export default InvestmentForm;




// import "../InvestmentForm/InvestmentForm.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const InvestmentForm = () => {

//   const initialFormData = {
//     startupname: "",
//     investmentAmount: "",
//     username: "",
//     password: "",
//   };

//   const [formErrors, setFormErrors] = useState({});
//   const [formData, setFormData] = useState(initialFormData);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;

//     // Validate the input fields
//     if (name === "investmentAmount") {
//       if (/^\d+$/.test(value) || value === "") {
//         setFormErrors({
//           ...formErrors,
//           [name]: "",
//         });
//       } else {
//         setFormErrors({
//           ...formErrors,
//           [name]: "Please enter numbers only.",
//         });
//       }
//     } else {
//       setFormErrors({
//         ...formErrors,
//         [name]: "",
//       });
//     }

//     // Update form data
//     setFormData({
//       ...formData,
//       [name]: name === "startupname" ? [value] : value,
//     });
//   };

//   var handleSubmit = (event) => {
//     event.preventDefault();

//     console.log("Form submitted:", formData);
//     setFormData(initialFormData); // Reset form fields
//     setFormErrors({}); // Clear any error messages
//     // }

//     fetch("http://localhost:8080/add-startup", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         // "Accept" : "application/json" //explicit specify
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(
//             toast.error("Failed! to Submit, Try Again", {
//               position: "top-center",
//               autoClose: 3000,
//             })
//           );
//         }

//         //-------------Pop-up-------//

//         toast.success("Congratulations! On Your Investment 😊, Investor Name", {
//             position: "top-center",
//             autoClose: 5000
//         });
//         // alert("saved investor data");
//         return response.json(); // Parse response as JSON
//       })
//       .then((data) => {
//         console.log("Success:", data);
//         setFormData(initialFormData); // Reset form fields after successful submission
//         setFormErrors({});
//         //  setErrorMessage(""); // Clear any previous error messages
//       })

//       .catch((error) => {
//         console.error("Error:", error);
//         if (error.response && error.response.status === 200) {
//           // Check if response exists
//           error.response.text().then((text) => {
//             console.log("Non-JSON response:", text); // Log non-JSON response as text
//           });
//         } else {
//           console.log("Non-JSON response: No response object available.");
//         }
//         //  setErrorMessage("Failed to submit form. Please try again."); // Set error message on submission failure
//       });
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <p id="heading-textt">
//         "Welcome, Investor Name! Expand Your Portfolio : Diversify Your
//         Investments! 😉"
//       </p>
//       <form className="form-container" id="form-size" onSubmit={handleSubmit}>
//         <label htmlFor="startupname">
//           StartUp/Company Full Name<span className="required">*</span>
//         </label>

//         <input
//           type="text"
//           placeholder="Enter StartUp/Company  Name "
//           name="startupname"
//           required="true"
//           value={formData.startupname}
//           onChange={handleInputChange}
//         />

//         <label htmlFor="investmentAmount">
//           Investment Amount<span className="required">*</span>
//         </label>
//         <input
//           type="text"
//           placeholder="Enter Amount"
//           name="investmentAmount"
//           required="true"
//           value={formData.investmentAmount}
//           onChange={handleInputChange}
//         />

//         <label htmlFor="username">
//           Username<span className="required">*</span>
//         </label>
//         <input
//           type="text"
//           placeholder="Enter New Username"
//           name="username"
//           required="true"
//           value={formData.username}
//           onChange={handleInputChange}
//         />

//         <label htmlFor="password">
//           Password<span className="required">*</span>
//         </label>
//         <input
//           type={showPassword ? "text" : "password"}
//           placeholder="Enter New Password"
//           name="password"
//           required="true"
//           id="pass-id"
//           value={formData.password}
//           onChange={handleInputChange}
//         />
//         <input
//           type="checkbox"
//           id="show-password"
//           onChange={handleTogglePassword}
//         />
//         <span id="show-pass-text">Click to Show Password</span>

//         <p id="p-sign-up">
//           For new user -{" "}
//           <span id="sign-upp">
//             {" "}
//             <Link
//               to="/InvestorSignUp"
//               style={{ textDecoration: "none", color: "blue" }}
//             >
//               Sign-Up
//             </Link>
//           </span>
//         </p>

//         <input id="submit-color" type="submit" value="Ready! To Invest" />
//       </form>
//     </div>
//   );
// };

// export default InvestmentForm;

//-------json data--//
    // const requestBody = {
    //   startupname: formData.startupname,
    //   investment_amount: formData.investmentAmount,
    //   username: formData.username,
    //   password: formData.password,
    // };

    // const queryParams = new URLSearchParams(formData).toString();