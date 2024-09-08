import React, { useState, useEffect } from 'react';

import choiceAnswerBox from './choiceAnswerBox.css';



function ChoiceAnswerBox({ answer, setAnswer, availableAnswers, fakeAnswers, helpIconClicked }) {

  function handleAnswerClick(answer) {
    if (!fakeAnswers.includes(answer)) {
      setAnswer(answer);
    }
  }

  return (
    <div className="choice-answer-box-container" >
      {availableAnswers.map((availableAnswer, index) => (
        <div key={index} className={`choice-answer-box ${(availableAnswer.answer == answer)? 'selected' : ''} ${(fakeAnswers.includes(availableAnswer.answer)) ? 'fake' : ''}`} onClick={() => handleAnswerClick(availableAnswer.answer)}>
          <p>{availableAnswer.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default ChoiceAnswerBox;
