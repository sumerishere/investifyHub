// import "../AddStartUpBtn/AddStartUpBtn.css";
// import React from "react";
// import { useForm } from "react-hook-form";
// import styled from "styled-components";

// const FormWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   padding: 20px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   max-width: 600px;

//   padding: 35px;
//   border-radius: 8px;
//   box-shadow: 1px 3px 4px rgb(0,0,0,0.5);

//   label {
//     margin-bottom: 8px;
//     font-weight: 500;

//   }

//   input {
//     margin-bottom: 20px;
//     padding: 10px;
//     font-size: 16px;
//     border: 1px solid ;
//     border-radius: 4px;
//   }
//     input:focus {
//     outline: none;
//     border-color: #007bff;
// }

//   button {
//     padding: 10px 15px;
//     font-size: 16px;
//     background-color: #007bff;
//     color: white;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;

//     &:hover {
//       background-color: #0056b3;
//     }
//   }
// `;

// const AddStartUpBtn = () => {

//   const {
//     register,
//     handleSubmit,
//     formState: { errors }} = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   const handleSubmitFetch = async (event) => {
//     event.preventDefault();

//     const form = event.target;
//     const formData = new FormData(form);

//     try {
//       const response = await fetch("http://localhost:8080/StartUp-Registration", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit form");
//       }

//       const data = await response.json();
//       console.log("Form submission successful:", data);
//       // Optionally, you can handle success or navigate to another page here
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       // Handle error condition (e.g., display error message)
//     }
//   };
//   const handleFormSubmit = (data) => {
//     const formData = new FormData();
//     Object.keys(data).forEach((key) => {
//       formData.append(key, data[key]);
//     });

//     handleSubmitFetch(formData);
//   };

//   return (
//     <div>
//       <h2>Start-Up Registration Form</h2>
//       <FormWrapper>
//         <Form onSubmit={handleSubmit(onSubmit)}>
//           <label>Founder Name</label>
//           <input  placeholder="Enter Your Name"{...register("founderName", { required: true })} />
//           {errors.founderName && (
//             <span style={{ color: "red" }}>This field is required</span>
//           )}

//           <label>Mobile No.</label>
//           <input placeholder="Enter Your Mobile No."
//             {...register("mobileNo", { required: true, pattern: /^[0-9]+$/ })}
//           />
//           {errors.mobileNo && (
//             <span style={{ color: "red" }}>
//               Please enter a valid mobile number
//             </span>
//           )}

//           <label>Email ID</label>
//           <input placeholder="Enter Your Email ID"
//             {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
//           />
//           {errors.email && (
//             <span style={{ color: "red" }}>
//               Please enter a valid email address
//             </span>
//           )}

//           <label>LinkedIn URL</label>
//           <input placeholder="Enter Your LinkedIn URL"
//             {...register("linkedinUrl", {
//               required: true,
//               pattern: /^https:\/\/[a-z]{2,3}\.linkedin\.com\/.*$/i,
//             })}
//           />
//           {errors.linkedinUrl && (
//             <span style={{ color: "red" }}>
//               Please enter a valid LinkedIn URL
//             </span>
//           )}

//           <label>Company Website URL</label>
//           <input placeholder="Enter Your Company Website URL"
//             {...register("websiteUrl", {
//               required: true,
//               pattern: /^https?:\/\/.*$/i,
//             })}
//           />
//           {errors.websiteUrl && (
//             <span style={{ color: "red" }}>
//               Please enter a valid website URL
//             </span>
//           )}

//           <label>Upload Start-Up Details document File
//             <p id="note-pdf">Note : File should be in PDF format only.</p>
//           </label>
//           <input type="file" {...register("pdfFile", { required: true })} />
//           {errors.pdfFile && (
//             <span style={{ color: "red" }}>Please upload a PDF file</span>
//           )}

//           <button type="submit">Submit</button>
//         </Form>
//       </FormWrapper>
//     </div>
//   );
// };

// export default AddStartUpBtn;

import "../AddStartUpBtn/AddStartUpBtn.css";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import { useState } from "react";

import {dotSpinner} from 'ldrs';

dotSpinner.register(); // Register the dotSpinner

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 35px;
  border-radius: 8px;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.5);

  label {
    margin-bottom: 8px;
    font-weight: 500;
  }

  input {
    margin-bottom: 20px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input:focus {
    outline: none;
    border-color: #007bff;
  }

  button {
    padding: 10px 15px;
    font-size: 16px;
    background-color: rgba(118, 70, 127, 0.978);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: rgba(118, 70, 127, 0.7);
    }
  }
`;

const AddStartUpBtn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false); // State to manage loading spinner

  const onSubmit = (data) => {
    console.log("Local form submission:", data);
    // Handle local form submission logic here if needed
  };

  const handleSubmitFetch = async (formData) => {
    setLoading(true); // Start spinner on form submission

    try {
      const response = await fetch(
        "http://localhost:8080/StartUp-Registration",
        {
          method: "POST",
          body: formData,
        }
      );

      setLoading(false); // stop spinner after response
      if (!response.ok) {
        console.log("data object : ", formData);

        toast.error("Failed!!! to Submit, Try Again", {
          position: "bottom-right",
          autoClose: 3000,
        });

        throw new Error("Failed to submit form");
      }

      const responseData = await response.json();
      toast.success(`Start-Up Registration, Successfully!! 😊`, {
        position: "bottom-right",
        autoClose: 5000,
        className: "custom-toast", // Apply the custom class
      });
      reset();
      console.log("Form submitted successfully:", responseData);
      // Optionally, handle success response here (e.g., show success message)
    } catch (error) {
      setLoading(false); // Stop spinner on error
      console.error("Error submitting form:", error);
      // Handle error condition (e.g., display error message)
    }
  };

  const handleFormSubmit = (data) => {
    const formData = new FormData();

    // formData.append("founderName", data.founderName);
    // formData.append("mobileNo", data.mobileNo);
    // formData.append("email", data.email);
    // formData.append("linkedInUrl", data.linkedInUrl);
    // formData.append("companyUrl", data.companyUrlUrl);
    // formData.append("companyPdf", data.pdfFile[0]); // Assuming pdfFile is obtained from input type="file"

    const formJson = {
      founderName: data.founderName,
      mobileNo: data.mobileNo,
      email: data.email,
      linkedInUrl: data.linkedInUrl,
      companyName: data.companyName,
      companyUrl: data.companyUrl,
    };

    formData.append(
      "form",
      new Blob([JSON.stringify(formJson)], { type: "application/json" })
    );

    // Add the PDF file
    formData.append("companyPdf", data.pdfFile[0]);

    handleSubmitFetch(formData);
  };

  return (
    <div>
      <h2 id="startup-regis-h2">Start-Up Registration Form</h2>
      <ToastContainer />
      <p id="heading-line-startup">
        Register your startup/company on InvestifyHub.in to connect with investors and
        grow your business. <br />Join our platform today to gain valuable exposure
        and support for your innovative!! ideas.
      </p>
      <FormWrapper>
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <label>
            Founder's Name <span className="required">*</span>{" "}
          </label>
          <input
            placeholder="Enter Your Name"
            {...register("founderName", { required: true })}
          />
          {errors.founderName && (
            <span style={{ color: "red" }}>This field is required</span>
          )}

          <label>
            Mobile No. <span className="required">*</span>
          </label>
          <input
            placeholder="Enter Your Mobile No."
            {...register("mobileNo", { required: true, pattern: /^[0-9]+$/ })}
          />
          {errors.mobileNo && (
            <span style={{ color: "red" }}>
              Please enter a valid mobile number
            </span>
          )}

          <label>
            Email ID <span className="required">*</span>
          </label>
          <input
            placeholder="Enter Your Email ID"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && (
            <span style={{ color: "red" }}>
              Please enter a valid email address
            </span>
          )}

          <label>
            LinkedIn URL <span className="required">*</span>
          </label>
          <input
            placeholder="Enter Your LinkedIn URL"
            {...register("linkedInUrl", {
              required: true,
              pattern: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
            })}
          />
          {errors.linkedInUrl && (
            <span style={{ color: "red" }}>
              Please enter a valid LinkedIn URL
            </span>
          )}

          <label>
            Company/Start-Up Name <span className="required">*</span>
          </label>
          <input
            placeholder="Enter Company/Start-Up Name"
            {...register("companyName", { required: true })}
          />
          {errors.companyName && (
            <span style={{ color: "red" }}>
              Please enter a valid Company/Start-Up Name
            </span>
          )}

          <label>
            Company Website URL <span className="required">*</span>
          </label>
          <input
            placeholder="Enter Your Company Website URL"
            {...register("companyUrl", {
              required: true,
              pattern: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
              // pattern: /^https?:\/\/.*/i,
            })}
          />
          {errors.companyUrl && (
            <span style={{ color: "red" }}>
              Please enter a valid website URL
            </span>
          )}

          <label>
            Upload Start-Up Details document File{" "}
            <span className="required">*</span>
            <p id="note-pdf">
              Note : File should be in PDF, doc, .docs format only, with
            </p>
            <p id="note-size">size limit upto 10MB.</p>
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            {...register("pdfFile", { required: true })}
          />
          {errors.pdfFile && (
            <span style={{ color: "red" }}>Please upload a PDF file</span>
          )}

          <button type="submit" disabled={loading}>
            Submit
          </button>
        </Form>
      </FormWrapper>

      {loading && (
        <div className="spinner">
          <l-dot-spinner size="40" speed="0.9" color=" #69397e"></l-dot-spinner>
        </div>
      )}
    </div>

  );
};

export default AddStartUpBtn;
