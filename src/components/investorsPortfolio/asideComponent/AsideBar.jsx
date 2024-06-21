import React from "react";
import "../asideComponent/AsideBar.css";
// import Hamburger from "/public/profile_Images/hamburger.png";
import { Link } from "react-router-dom";
const AsideBar = ({ open }) => {
  return (
    <div className="aside-bar-root">
      <div className={open ? "aside-bar collapse" : "aside-bar"}>
        <ul>
          <li>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
          </li>
          <li id= "aside-panel">
            Settings
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
