import React from "react";
import "../asideComponent/BackDrop.css";

const BackDrop = ({ click, open }) => {
  return (
    <div
      className={open ? "backdrop  backdrop-open" : "backdrop"}
      onClick={click}
    ></div>
  );
};

export default BackDrop;
