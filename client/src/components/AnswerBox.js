import React from 'react';

import CustomBoundaryButton from "./CustomBoundaryButton.js";



function AnswerBox({ answer, setAnswer, min, max, step, helpIconClicked, prevMin, prevMax, sendAnswer, setShowError}) {
  return (
    <div style={{ width: '80%', maxWidth: '600px' }}>
      <div
        className="d-flex justify-content-center align-items-center"
      >
        <CustomBoundaryButton isMin={true} message={min} helperUsed={helpIconClicked} prevMessage={prevMin} color="rgb(87, 169, 221)" />
        <input
          type="number"
          className="form-control"
          id="answerInput"
          value={answer || ''}
          onChange={(e) => {
            setAnswer(e.target.value);
            setShowError(false);
          }}
          style={{ fontSize: '1.3rem', padding: '10px', width: '60%' }}
        />
        <CustomBoundaryButton isMin={false} message={max} helperUsed={helpIconClicked} prevMessage={prevMax} color="rgb(87, 169, 221)" />
      </div>

      <input 
        type="range"
        className="form-range d-flex justify-content-center"
        min={min}
        max={max}
        step={step}
        id="answerSlider"
        value={answer}
        onChange={(e) => {
          setAnswer(e.target.value);
          setShowError(false);
        }}
        style={{ height: '60px' }}
      />

    </div>
  );
};

export default AnswerBox;
