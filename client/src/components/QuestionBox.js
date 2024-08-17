import React from 'react';



function QuestionBox({ question }) {
  return (
    <div className="d-flex flex-column align-items-center mb-2">
      <h1
        className="m-0"
        style={{
          fontFamily: "customFont",
          fontSize: "2rem",
          letterSpacing: "0.1rem",
        }}
      >Domanda</h1>
      <h3 className="p-1" style={{ textAlign: "center" }}>{question}</h3>
    </div>
  );
};

export default QuestionBox;
