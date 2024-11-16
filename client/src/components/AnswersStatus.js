import React from 'react';

import "./answersStatus.css";


function AnswersStatus({ activePlayersCount, answersCount }) {
  return (
    <button className="answerStatus-button">
      <span>{answersCount} / {activePlayersCount}</span>
    </button>
  );
};

export default AnswersStatus;
