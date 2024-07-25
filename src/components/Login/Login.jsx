import React, { useState, useEffect } from "react";
import "./login.css";
// import { GoogleOutlined, AppleOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AlertLoginComp from "./AlertLogin";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false); // State to handle alert visibility

  const navigate = useNavigate();

  const handleSignIn = async () => {
    console.log("In Sign in");

    try {
      const investorResponse = await fetch(
        `http://localhost:8080/get-investor?username=${username}&password=${password}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!investorResponse.ok) {
        console.log("inevstor object not get!!");
        throw new Error("Investor not found");
      }

      const investorData = await investorResponse.json();
      console.log("Investor Data:", investorData);

      if (Object.keys(investorData).length === 0) {
        throw new Error("Invalid username or password");
      }

      const startupsResponse = await fetch(
        "http://localhost:8080/invested-startups",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }), // Object shorthand notation
        }
      );

      if (!startupsResponse.ok) {
        throw new Error("Failed to fetch startups");
      }

      const jsondata = await startupsResponse.json(); // Parse response JSON
      console.log(jsondata);

      if (jsondata.length === 0) {
        setShowAlert(true); // Show alert if no data is returned
        setUsername("");
        setPassword("");
      } else {
        navigate("/InvestorNavbar", { state: { jsondata } });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to Sign-in, Try Again", {
        position: "top-center",
        autoClose: 3000,
      });

      setUsername("");
      setPassword("");
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false); // Close the alert
  };

  return (
    <div className="login-root-div">
      {/* <AlertLoginComp/> */}
      <ToastContainer />
      {showAlert && <AlertLoginComp onClose={handleCloseAlert}/>}
      <h3 id="login-heading">Investor Log-in</h3>

      <div className="overlayy"></div>
      <img className="back-img" src="/business-02png.png" alt="" />

      <div className="login-r">
        <div className="form">
          <div className="flex-column">
            <label id="label-css">Investor's username </label>
          </div>
          <div className="inputForm">
            <svg
              height="20"
              viewBox="0 0 32 32"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Layer_3" data-name="Layer 3">
                <path d="M30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
              </g>
            </svg>
            <input
              value={username}
              name="username"
              required={true}
              type="text"
              className="input"
              placeholder="Enter your Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
          </div>

          <div className="flex-column">
            <label id="label-css">Password </label>
          </div>

          <div className="inputForm">
            <svg
              height="20"
              viewBox="-64 0 512 512"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
              <path d="M304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
            </svg>

            <input
              value={password}
              name="password"
              required={true}
              type="password"
              className="input"
              placeholder="Enter your Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>

          <div className="flex-row">
            <div>
              <input type="checkbox"></input>
              <label>Remember me </label>
            </div>
            <p className="span">Forgot password?</p>
          </div>

          <button className="button-submit" onClick={handleSignIn}>
            Sign-in
          </button>

          <p className="p-or-text">
            Don't have an account? Or with
            <span className="span-sign-up">
              <Link
                to="/InvestorSignUp"
                style={{ textDecoration: "none", color: "#317efb" }}
              >
                Sign-Up
              </Link>
            </span>
          </p>

          <div className="flex-row">
            {/* <button className="btn google">
              <GoogleOutlined /> Google
            </button>

            <button className="btn apple">
              <AppleOutlined /> Apple
            </button> */}
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Login;