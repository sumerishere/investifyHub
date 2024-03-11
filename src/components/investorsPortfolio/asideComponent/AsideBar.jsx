import React from "react";
import "../asideComponent/AsideBar.css";
// import Hamburger from "/public/profile_Images/hamburger.png";

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
            <a href="#!">Sign-Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AsideBar;
