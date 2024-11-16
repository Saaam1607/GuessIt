import React from 'react';

import "./choiceAnswerCard.css";
import './choiceAnswerBox.css';


function ChoiceAnswerCard({ answer, isSelected, isHidden, isWinning, clickFunction }) {

  return (
    <div
      className={`choice-answer-box ${(isSelected)? 'selected' : ''} ${(isHidden) ? 'fake' : ''} ${(isWinning) ? 'winning' : ''}`}
      onClick={clickFunction}
    >
      <p>{answer}</p>
    </div>
  );
};

export default ChoiceAnswerCard;
 