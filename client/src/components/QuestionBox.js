import React from 'react';
import './questionBox.css';

function QuestionBox({ question, image }) {
  let imagePath;
  if (image && typeof image === 'string' && image.trim() !== '') {
    try {
      imagePath = require(`../assets/images/questionImages/${image}.png`);
    } catch (error) {
      console.error("Image not found:", error);

    }
  }

  return (
    <div className="question-box">
      <h1 className="question-text">{question}</h1>
      {imagePath &&
        <img className="question-image" src={imagePath} alt="question" />
      }
    </div>
  );
}

export default QuestionBox;
