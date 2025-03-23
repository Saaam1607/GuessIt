import React from 'react';
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { setAnswer } from "../redux/actions/answerDataActions.js";

import CustomBoundaryButton from "./CustomBoundaryButton.js";



function AnswerBox() {
  
  const dispatch = useDispatch();

  const questionData = useSelector(state => state.questionData);
  const answerData = useSelector(state => state.answerData);

  const min = answerData.helpBonusUsed ? questionData.bonusMin : questionData.min;
  const max = answerData.helpBonusUsed ? questionData.bonusMax : questionData.max;

  return (
    <div className="mt-2" style={{ width: '100%', maxWidth: '600px' }}>
      <div
        className="d-flex justify-content-center align-items-center"
      >
        <CustomBoundaryButton isMin={true} helperUsed={answerData.helpBonusUsed} color="#489bd4" />
          <input
            type="number"
            className="form-control"
            id="answerInput"
            value={answerData.answer || ''}
            onChange={(e) => {
              dispatch(setAnswer(e.target.value));
            }}
            style={{ fontSize: '1.3rem', padding: '10px', width: '100%', height: '50px', borderRadius: '0', textAlign: 'center' }}
          />
        <CustomBoundaryButton isMin={false} helperUsed={answerData.helpBonusUsed} color="#489bd4" />
      </div>

      <input 
        type="range"
        className="form-range d-flex justify-content-center"
        min={min}
        max={max}
        step={questionData.step}
        id="answerSlider"
        value={answerData.answer}
        onChange={(e) => {
          dispatch(setAnswer(e.target.value));
        }}
        style={{ height: '60px' }}
      />

    </div>
  );
};

export default AnswerBox;
