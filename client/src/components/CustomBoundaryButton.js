import React from 'react';
import { useSelector } from "react-redux";

import "./customFont.css";
import "./boundaryButton.css";



function CustomBoundaryButton({ isMin, helperUsed, color }) {

  const questionData = useSelector(state => state.questionData);

  let message = isMin? questionData.min : questionData.max;
  let bonusMessage = isMin? questionData.bonusMin : questionData.bonusMax;

  console.log("message: ", message);
  console.log("bonusMessage: ", bonusMessage);

  return (
    <div className={`boundary-container ${isMin? 'min' : 'max'}  ${helperUsed? 'gold' : ''}`}>
      {helperUsed ? (
        <>
          <p className='crossed'>{message}</p>
          <p className="helper" >{bonusMessage}</p>
        </>
      ) : (
        <p>{message}</p>
      )}



    </div>
  );

};

export default CustomBoundaryButton;
