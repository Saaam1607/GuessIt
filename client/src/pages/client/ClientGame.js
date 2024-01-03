import React, { useState, useEffect, useRef } from "react";
import { io } from 'socket.io-client';

import './clientGame.css';

const SoundManager = require('../../components/SoundManager.js');

const socketUrl = process.env.REACT_APP_SOCKET_URL || "https://guessitserver.onrender.com";
const socket = io.connect(socketUrl);





function ClientGame() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showError, setShowError] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);
  const hasAnsweredRef = useRef(hasAnswered);

  useEffect(() => {
    hasAnsweredRef.current = hasAnswered;
  }, [hasAnswered]);

  function getQuestion() {
    socket.emit("getQuestion", {});
  }

  function sendAnswer() {
    if (hasAnswered) {
      return;
    }

    if (answer === undefined || answer === "") {
      setShowError(true);
      return;
    }
    setHasAnswered(true);
    socket.emit("newAnswer", { playerId: localStorage.getItem('playerId'), answer: answer });
    SoundManager.playAnswerSentSound();
  }

  function handleClockSound() {
    if (!hasAnsweredRef.current) {
      SoundManager.playClockSound();
    }
  }

  function handleExtremeClockSound() {
    if (!hasAnsweredRef.current) {
      SoundManager.playExtremeClockSound();
    }
  }



  useEffect(() => {

    getQuestion();

    function handleNextQuestion(data) {
      SoundManager.playNewQuestionSound();
      setQuestion(data.question);
      setAnswer(undefined);
      setShowError(false);
      setHasAnswered(false);
    }
  
    socket.on("nextQuestion", handleNextQuestion);
    socket.on("clock", handleClockSound);
    socket.on("extremeClock", handleExtremeClockSound);
  
    return () => {
      socket.off("nextQuestion", handleNextQuestion);
      socket.off("clock", handleClockSound);
      socket.off("extremeClock", handleExtremeClockSound);
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
        <h1>DOMANDA</h1>
        <h5 className="p-3">
          {question}
        </h5>

        { !hasAnswered && (
          <form
            className="d-flex flex-column align-items-center justify-content-center p-3"
            onSubmit={(e) => {
              e.preventDefault();
              sendAnswer();
            }}
          >
            <input
              type="number"
              className="form-control"
              id="answerInput"
              placeholder="risposta"
              value={answer || ''}
              onChange={(e) => {
                setAnswer(e.target.value);
                setShowError(false);
              }}
            />

            <button
              type="submit"
              className="btn btn-primary m-5"
            >
              Indovina
            </button>
            <p className="text-danger m-1">
              {showError && "Please enter a valid answer!"}
            </p>
          </form>
        )}

        { hasAnswered && (
          <p>Aspettando le risposte degli altri giocatori...</p>
        )}



      </div>
    </div>
  );
}

export default ClientGame;
