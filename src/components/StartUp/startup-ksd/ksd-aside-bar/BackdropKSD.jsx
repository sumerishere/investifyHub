import React from "react";
import "../ksd-aside-bar/BackdropKSD.css";

const BackdropKsd = ({ click, open }) => {
  return (
    <div className={open ? "backdrop-ksd backdrop-open" : "backdrop-ksd"} onClick={click}></div>
  );
};

export default BackdropKsd;
