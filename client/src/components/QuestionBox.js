import React from 'react';



function QuestionBox({ question }) {
  return (
    <>
      <h1
        style={{
          fontFamily: "customFont",
          fontSize: "2rem",
          letterSpacing: "0.1rem",
        }}
      >
        Domanda
      </h1>
      <h3 className="p-3">
        {question}
      </h3>
    </>
  );
};

export default QuestionBox;
