import React, { useState, useEffect } from 'react';

import "./customFont.css";

import answer_icon from '../assets/images/answer_icon.png';



function GuessButton({ onClickFunction }) {

  const [currentImage, setCurrentImage] = useState(answer_icon);

  return (
    <button
      className="btn ps-5 pe-5 border"
      style={{
        backgroundColor: "rgb(87, 169, 221)",
        color: "white",
        borderRadius: "10px",
        fontFamily: "customFont",
        fontSize: "2rem",
        letterSpacing: "0.2rem",
      }}
    >
      Indovina
      <img src={currentImage} alt="icon" style={{ width: "2.3rem", marginLeft: "0.3rem" }} />
    </button>
  );

};



export default GuessButton;
