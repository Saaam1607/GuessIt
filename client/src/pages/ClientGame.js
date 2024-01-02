import React, { useState, useEffect } from "react";
import { io } from 'socket.io-client';

const socket = io.connect("http://localhost:8000");



function ClientGame() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(undefined);
  const [showError, setShowError] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  function getQuestion() {
    socket.emit("getQuestion", {});
  }

  function sendAnswer() {
    if (answer === undefined || answer === "") {
      setShowError(true);
      return;
    }
    setHasAnswered(true);
    socket.emit("newAnswer", { playerId: localStorage.getItem('playerId'), answer: answer });
  }

  useEffect(() => {

    getQuestion();

    function handleNextQuestion(data) {
      setQuestion(data.question);
      setAnswer(undefined);
      setShowError(false);
      setHasAnswered(false);
    }
  
    socket.on("nextQuestion", handleNextQuestion);
  
    return () => {
      socket.off("nextQuestion", handleNextQuestion);
    };

  }, [socket]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div
        className={"d-flex flex-column align-items-center justify-content-center bg-light m-3 p-2"}
        style={{
          borderRadius: "30px",
          width: "80%",
        }}
      >
        <h1>Question</h1>
        <h3>{question}</h3>

        { !hasAnswered && (
          <form
            className="d-flex flex-column align-items-center justify-content-center"
            onSubmit={(e) => {
              e.preventDefault(); // Evita il submit automatico del form
              sendAnswer();
            }}
          >
            <input
              type="number"
              className="form-control"
              id="answerInput"
              placeholder="your answer"
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
                setShowError(false);
              }}
            />

            <button
              type="submit"
              className="btn btn-primary m-5"
            >
              Answer
            </button>
            <p className="text-danger m-1">
              {showError && "Please enter a valid answer!"}
            </p>
          </form>
        )}

        { hasAnswered && (
          <p>Waiting for other players to answer...</p>
        )}



      </div>
    </div>
  );
}

export default ClientGame;
