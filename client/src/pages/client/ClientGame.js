import React, { useState, useEffect, useRef } from "react";
import { io } from 'socket.io-client';

import CustomButton from "../../components/CustomButton.js";

import './clientGame.css';

const SoundManager = require('../../components/SoundManager.js');

const socketUrl = process.env.REACT_APP_SOCKET_URL || "https://guessitserver.onrender.com";
const socket = io.connect(socketUrl);





function ClientGame() {

  const [question, setQuestion] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [step, setStep] = useState(0);
  const [unit, setUnit] = useState("");
  const [answer, setAnswer] = useState("");
  const [showError, setShowError] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);
  const hasAnsweredRef = useRef(hasAnswered);

  const [showResults, setShowResults] = useState(false);
  const [playersAnswersData, setPlayersAnswersData] = useState([]);

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
      setMin(data.min);
      setMax(data.max);
      setStep(data.step);
      setUnit(data.unit);
      setAnswer(undefined);
      setShowError(false);
      setHasAnswered(false);
      setShowResults(false);
    }

    function handleResults(data) {
      const unsortedPlayersAnswersData = data.playersAnswersData;
      const sortedPlayersAnswersData = unsortedPlayersAnswersData.sort((a, b) => {
        return a.answer - b.answer;
      });
      setPlayersAnswersData(sortedPlayersAnswersData);
      setShowResults(true);
    }
  
    socket.on("nextQuestion", handleNextQuestion);
    socket.on("results", handleResults);
    socket.on("clock", handleClockSound);
    socket.on("extremeClock", handleExtremeClockSound);
  
    return () => {
      socket.off("nextQuestion", handleNextQuestion);
      socket.off("results", handleResults);
      socket.off("clock", handleClockSound);
      socket.off("extremeClock", handleExtremeClockSound);
    };

  }, [socket]);

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center  border-4"
      style={{
        height: "90%",
        width: "100%",
      }}
    >
      <div
        className={"d-flex flex-column align-items-center justify-content-start bg-light m-3 p-2"}
        style={{
          borderRadius: "30px",
          width: "80%",
          height: "100%",
        }}
      >
        <h1
          style={{
            fontFamily: "customFont",
            fontSize: "2rem",
            letterSpacing: "0.1rem",
          }}
        >
          Domanda
        </h1>
        <h5 className="p-3">
          {question}
        </h5>

        { !hasAnswered && !showResults && (
          <form
            className=" border-4 d-flex flex-column align-items-center justify-content-center p-3"
            style={{
              height: "100%",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              sendAnswer();
            }}
          >
            <input
              type="number"
              className="form-control"
              id="answerInput"
              value={answer || ''}
              onChange={(e) => {
                setAnswer(e.target.value);
                setShowError(false);
              }}
            />
            <input 
              type="range"
              className="form-range"
              min={min}
              max={max}
              step={step}
              id="answerSlider"
              value={answer || ''}
              onChange={(e) => {
                setAnswer(e.target.value);
                setShowError(false);
              }}
            />
            <div
              className=" d-flex flex-column align-items-center justify-content-center"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <CustomButton
                message="Invia"
                color="rgb(87, 169, 221)"
                type="submit"
              />

              <p className="text-danger m-1">
                {showError && "Please enter a valid answer!"}
              </p>
            </div>
            

          </form>
        )}

        { hasAnswered && !showResults && (
          <p>Aspettando le risposte degli altri giocatori...</p>
        )}

        { showResults && (
          <div>
            <h3
              style={{
                fontFamily: "customFont",
                fontSize: "2rem",
                letterSpacing: "0.1rem",
              }}
            >
              Risultati
            </h3>
            {playersAnswersData.map((playerAnswerData, index) => (
              <div
                key={index}
                className={"m-1"}
              >
                <p
                  style={{
                    fontFamily: "customFont",
                    fontSize: "1.4rem",
                    letterSpacing: "0.1rem",
                  }}
                >
                  {playerAnswerData.name} : {playerAnswerData.answer}
                </p>
              </div>
            ))}
          </div>
        )}



      </div>
    </div>
  );
}

export default ClientGame;
