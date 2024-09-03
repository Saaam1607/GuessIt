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
    <div
      className="question-box p-0 m-0 p-4"
      style={{
        backgroundColor: "#489bd4",
        backgroundImage: `url(${require("../assets/images/texture.png")})`,
        backgroundSize: "75%" 
      }}
    >
      {imagePath &&
        <img className="question-image" src={imagePath} alt="question" />
      }
      <h1 className="question-text lead">{question}</h1>

    </div>
  );
}

export default QuestionBox;
