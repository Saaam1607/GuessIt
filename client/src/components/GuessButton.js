import React, { useState, useEffect } from 'react';

import "./customFont.css";

import answer_icon from '../assets/images/answer_icon.png';
// import answer_icon_2 from '../assets/images/answer_icon_4.png';

// import answer_icon_4 from '../assets/images/answer_icon_2.png';
// import answer_icon_3 from '../assets/images/answer_icon_3.png';



function GuessButton({ onClickFunction }) {

  const [currentImage, setCurrentImage] = useState(answer_icon);
//   const imageSequence = [answer_icon_3, answer_icon_4, answer_icon_3, answer_icon_2, answer_icon_3, answer_icon_4, answer_icon_3, answer_icon]; 

//   const [intervalTime, setIntervalTime] = useState(3000);



//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       index = (index + 1) % imageSequence.length;
//       setCurrentImage(imageSequence[index]);
//     }, intervalTime);
//     return () => clearInterval(interval);
//   }, [intervalTime]);

//   useEffect(() => {
//     if (currentImage === answer_icon) {
//       setIntervalTime(3000);
//     } else {
//       setIntervalTime(250);
//     }
//   }, [currentImage]);


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
