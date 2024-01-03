import React from 'react';

import "./customFont.css";



function CustomButton({ message, color, onClickFunction }) {

  function handleClick() {
    if (onClickFunction) {
      onClickFunction();
    }
  }


  return (
    <button
      className="btn m-1 ps-5 pe-5"
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
    </button>
  );

};

export default CustomButton;
