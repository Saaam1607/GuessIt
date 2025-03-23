import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

import PowerSelector from './PowerSelector';

import './questionBox.css';



function QuestionBox({
  showImage,
  handleGhostIconClick,
  handleX2IconClick,
  handleHelpIconClick,
}) {

  const questionData = useSelector(state => state.questionData);
  const bonusData = useSelector(state => state.bonusData);

  const imagePath = questionData.image ? `/assets/images/questionImages/${questionData.image}.png` : null;

  return (
    <div className="question-box" >
      <div className="upper">
        { showImage && imagePath && <img className="question-image" src={imagePath} alt="question" /> }
        { showImage && (
          <PowerSelector
            handleGhostIconClick={handleGhostIconClick}
            handleX2IconClick={handleX2IconClick}
            handleHelpIconClick={handleHelpIconClick}
          />
        )}
      </div>
      <h1 className="question-text lead">{questionData.question}</h1>
    </div>
  );
}

export default QuestionBox;
