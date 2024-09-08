import React from 'react';

import "./customFont.css";
import "./boundaryButton.css";



function CustomBoundaryButton({ isMin, message, helperUsed, prevMessage, color }) {

  const messageToDisplay = helperUsed ? prevMessage : message;

  return (
    <div className={`boundary-container ${isMin? 'min' : 'max'}  ${helperUsed? 'gold' : ''}`}>
      <p className={`${helperUsed ? 'crossed' : ''}`} >{messageToDisplay}</p>
      {helperUsed && ( <p className="helper" >{message}</p> )}
    </div>
  );

};

export default CustomBoundaryButton;
