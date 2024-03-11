import React from "react";
import "../asideComponent/AsideBar.css";
// import Hamburger from "/public/profile_Images/hamburger.png";
import { Link } from "react-router-dom";
const AsideBar = ({ open }) => {
  return (
    <div>
      <div className={open ? "aside-bar collapse" : "aside-bar"}>
        <ul>
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">Settings</a>
          </li>
          <li>
            <Link to="/Login" style={{ textDecoration: "none", color: "white" }}>
              Sign-Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AsideBar;
