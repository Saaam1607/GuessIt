import React from 'react';

import "./customFont.css";



function CustomButton({ message, color, onClickFunction, icon }) {

  function handleClick() {
    if (onClickFunction) {
      onClickFunction();
    }
  }


  return (
    <button
      className="btn ps-5 pe-5"
      style={{
        backgroundColor: color,
        color: "white",
        borderRadius: "10px",
        fontFamily: "customFont",
        fontSize: "2rem",
        letterSpacing: "0.2rem",
      }}
      onClick={handleClick}
    >
      {message}
      {icon && <img src={icon} alt="icon" style={{ width: "2.3rem", marginLeft: "0.3rem" }} />}
    </button>
  );

};



export default CustomButton;
