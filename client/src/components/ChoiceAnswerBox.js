import React, { useState, useEffect } from 'react';

import ChoiceAnswerCard from './ChoiceAnswerCard';

import choiceAnswerBox from './choiceAnswerBox.css';

const SoundManager = require('../components/SoundManager.js');



function ChoiceAnswerBox({ answer, setAnswer, availableAnswers, fakeAnswers, helpIconClicked }) {

  function handleAnswerClick(answer) {
    if (!fakeAnswers.includes(answer)) {
      setAnswer(answer);
      SoundManager.playAnswerSelected();
    }
  }

  return (
    <div className="choice-answer-box-container" >
      {availableAnswers.map((availableAnswer, index) => (

        <ChoiceAnswerCard
          key={index}
          answer={availableAnswer.answer}
          isSelected={availableAnswer.answer == answer}
          isHidden={fakeAnswers.includes(availableAnswer.answer)}
          isWinning={false}
          clickFunction={() => handleAnswerClick(availableAnswer.answer)}
        />
      ))}
    </div>
  );
};

export default ChoiceAnswerBox;
