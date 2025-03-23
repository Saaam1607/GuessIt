import React from 'react';
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { setAnswer } from "../redux/actions/answerDataActions.js";

import ChoiceAnswerCard from './ChoiceAnswerCard';

import choiceAnswerBox from './choiceAnswerBox.css';

const SoundManager = require('../components/SoundManager.js');



function ChoiceAnswerBox() {

  const dispatch = useDispatch();

  const answerData = useSelector(state => state.answerData);
  const questionData = useSelector(state => state.questionData);

  function handleAnswerClick(answer) {
    if (answerData.helpBonusUsed)
      if (questionData.fakeAnswers.includes(answer))
        return
      
    SoundManager.playAnswerSelected();
    dispatch(setAnswer(answer));
  }

  return (
    <div className="choice-answer-box-container" >
      {questionData.availableAnswers?.length > 0 && questionData.availableAnswers.map((availableAnswer, index) => (
        <div className="d-flex flex-column" style={{width:"48%"}} key={index}>
          <ChoiceAnswerCard
            answer={availableAnswer.answer}
            isSelected={availableAnswer.answer == answerData.answer}
            isHidden={questionData.fakeAnswers.includes(availableAnswer.answer) && answerData.helpBonusUsed}
            isWinning={false}
            clickFunction={() => handleAnswerClick(availableAnswer.answer)}
          />
        </div>
      ))}
    </div>
  );
};

export default ChoiceAnswerBox;
