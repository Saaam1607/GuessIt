import React from 'react';

import CustomBoundaryButton from "./CustomBoundaryButton.js";



function AnswerBox({ answer, setAnswer, min, max, step, helpIconClicked, prevMin, prevMax, sendAnswer }) {
  return (
    <div className="mt-2" style={{ width: '100%', maxWidth: '600px' }}>
      <div
        className="d-flex justify-content-center align-items-center"
      >
        <CustomBoundaryButton isMin={true} message={min} helperUsed={helpIconClicked} prevMessage={prevMin} color="#489bd4" />
        <input
          type="number"
          className="form-control"
          id="answerInput"
          value={answer || ''}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
          style={{ fontSize: '1.3rem', padding: '10px', width: '100%', height: '50px', borderRadius: '0', textAlign: 'center' }}
        />
        <CustomBoundaryButton isMin={false} message={max} helperUsed={helpIconClicked} prevMessage={prevMax} color="#489bd4" />
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
        }}
        style={{ height: '60px' }}
      />

    </div>
  );
};

export default AnswerBox;
