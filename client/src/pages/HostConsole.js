import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io.connect("http://localhost:8000");



function HostConsole() {

  const [playersAnswersData, setPlayersAnswersData] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(undefined);

  function sendNextQuestion() {
    socket.emit("nextQuestion", {});
    setPlayersAnswersData([]);
  }

  useEffect(() => {

    function handleNewAnswer(data) {
      console.log("new answer from: " + data.name + " " + data.answer)
      setPlayersAnswersData((prevData) => [
        ...(prevData || []),
        { name: data.name || 'Unknown', answer: data.answer || 'No answer' },
      ]);
    }

    function handleNextQuestion(data) {
      setQuestion(data.question);
    }

    function handleNextAnswer(data) {
      setAnswer(data.answer);
    }
  
    socket.on("nextQuestion", handleNextQuestion);
    socket.on("nextAnswer", handleNextAnswer);
    socket.on("newAnswer", handleNewAnswer);
  
    return () => {
      socket.off("newAnswer", handleNewAnswer);
      socket.off("nextQuestion", handleNextQuestion);
    };

  }, [socket]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h3>Host Console</h3>

      <div>
        <h1>{question}</h1>
        <h3>{answer}</h3>
        {playersAnswersData !== undefined && playersAnswersData.map((playerAnswerData, index) => (
          <div
            key={index}
            className={"m-1"}
          >
            <p>{playerAnswerData.name} : {playerAnswerData.answer}</p>
          </div>
        ))}
      </div>

      <button
        className={"btn btn-primary btn-lg"}
        onClick={sendNextQuestion}
      >
        Send Next Question
      </button>

    </div>
  );
};

export default HostConsole;