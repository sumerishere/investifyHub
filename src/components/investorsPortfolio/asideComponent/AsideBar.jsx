import React from "react";
import "../asideComponent/AsideBar.css";
import { Link } from "react-router-dom";
const AsideBar = ({ open }) => {
  return (
    <div className="aside-bar-root">
      <div className={open ? "aside-bar collapse" : "aside-bar"}>

        <div className="logo-on-aside">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <p id="logo-on-aside-p">investifyHub📈</p>
            <sub id="logo-on-aside-sub">elevate your investments</sub>
          </Link>
        </div>

        <ul className="aside-ul-list">
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
