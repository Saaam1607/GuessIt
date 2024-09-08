import React from 'react';
import './questionBox.css';

function QuestionBox({ question, image, showImage }) {
  let imagePath;
  if (image && typeof image === 'string' && image.trim() !== '') {
    try {
      imagePath = require(`../assets/images/questionImages/${image}.png`);
    } catch (error) {
      console.error("Image not found:", error);
    }
  }

  return (
    <div className="question-box" >
      {showImage && imagePath && <img className="question-image" src={imagePath} alt="question" />}
      <h1 className="question-text lead">{question}</h1>
    </div>
  );
}

export default QuestionBox;
