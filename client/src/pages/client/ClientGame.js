import React, { useState, useEffect, useRef } from "react";
import { io } from 'socket.io-client';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




import CustomButton from "../../components/CustomButton.js";
import CustomBoundaryButton from "../../components/CustomBoundaryButton.js";

import GhostModal from "../../components/GhostModal.js";

import './clientGame.css';

const SoundManager = require('../../components/SoundManager.js');

const socketUrl = process.env.REACT_APP_SOCKET_URL || "https://guessitserver.onrender.com";
const socket = io.connect(socketUrl);

const ghost_icon = require('../../assets/images/ghost_icon.png');
const x2_icon = require('../../assets/images/x2_icon.png');
const help_icon = require('../../assets/images/help_icon.png');
const win_icon = require('../../assets/images/win_icon.png');




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

  const [previousMinMax, setPreviousMinMax] = useState({ min: 0, max: 0 });

  const [showResults, setShowResults] = useState(false);
  const [showClassification, setShowClassification] = useState(false);

  const [playersAnswersData, setPlayersAnswersData] = useState([]);
  const [classificationData, setClassificationData] = useState([]);

  const [ghostPowerAvailableBonuses, setGhostPowerAvailableBonuses] = useState(0);
  const [helpPowerAvailableBonuses, setHelpPowerAvailableBonuses] = useState(0);
  const [x2PowerAvailableBonuses, setX2PowerAvailableBonuses] = useState(0);

  const [ghostIconClicked, setGhostIconClicked] = useState(false);
  const [helpIconClicked, setHelpIconClicked] = useState(false);
  const [x2IconClicked, setX2IconClicked] = useState(false);

  const [showGhostModal, setShowGhostModal] = useState(false);
  const [ghostData, setGhostData] = useState([]);
  const [ghostResponse, setGhostResponse] = useState(null);

  useEffect(() => {
    hasAnsweredRef.current = hasAnswered;
  }, [hasAnswered]);

  function joinGame() {
    socket.emit("join", { name: "", playerId: localStorage.getItem('playerId') });
  }

  function getQuestion() {
    socket.emit("getQuestion", {});
  }

  function checkIfAlreadyAnswered() {
    socket.emit("hasAnswered", { playerId: localStorage.getItem('playerId') });
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
    socket.emit("newAnswer", { playerId: localStorage.getItem('playerId'), answer: answer, hasUsedX2: x2IconClicked, hasUsedHelp: helpIconClicked, hasUsedGhost: ghostIconClicked});
    SoundManager.playAnswerSentSound();
  }

  function computeTempAnswer(min, max, step) {
    min = parseInt(min);
    max = parseInt(max);
    step = parseInt(step);

    const middleValue = (min + max) / 2;
    var nearestValue = Math.round(middleValue / step) * step;
    nearestValue = Math.min(max, Math.max(min, nearestValue));

    setAnswer(nearestValue);
  }

  function showGhostResponseSwal(response) {
    console.log(response)
    Swal.fire({
      title: "La risposta del fantasma è...",
      html: `<p style="font-size: 40px;"><strong>${response}</strong></p>`, // Styling inline
      timer: 10000
    })
  }

  function showGhostResponseNotReadySwal() {
    Swal.fire({
      title: "Non ha ancora risposto",
      timer: 2000,
      showConfirmButton: false,
    })
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

  function handleGhostIconClick() {
    if (ghostPowerAvailableBonuses && !ghostIconClicked) {
      socket.emit("ghost", {});
    }
  }

  function handleHelpIconClick() {
    if (helpPowerAvailableBonuses && !helpIconClicked) {
      socket.emit("help", { playerId: localStorage.getItem('playerId') });
    }
  }


  function handleSuggest(data) {
    setHelpIconClicked(true);
    setMin(data.suggestedMin);
    setMax(data.suggestedMax);
    computeTempAnswer(data.suggestedMin, data.suggestedMax, data.step);
  }

  function handleX2IconClick() {
    if (x2PowerAvailableBonuses && !x2IconClicked) {
      setX2IconClicked(true);
    }
  }

  function handleSendGhost(selectedPlayerId) {
    socket.emit("ghostAnswer", { selectedPlayerId });
  }



  useEffect(() => {

    joinGame();
    getQuestion();

    function handleNextQuestion(data) {
      SoundManager.playNewQuestionSound();
      setQuestion(data.question);
      setMin(data.min);
      setMax(data.max);
      setPreviousMinMax({ min: data.min, max: data.max });
      setStep(data.step);
      setUnit(data.unit);
      computeTempAnswer(data.min, data.max, data.step);
      setShowError(false);
      setHasAnswered(false);
      setShowResults(false);
      setShowClassification(false);

      setGhostIconClicked(false);
      setHelpIconClicked(false);
      setX2IconClicked(false);

      setGhostData([]);

      socket.emit("getBonus", { playerId: localStorage.getItem('playerId') });

    }

    function handleResults(data) {
      const unsortedPlayersAnswersData = data.playersAnswersData;
      const sortedPlayersAnswersData = unsortedPlayersAnswersData.sort((a, b) => {
        return a.answer - b.answer;
      });
      setPlayersAnswersData(sortedPlayersAnswersData);
      setShowClassification(false);
      setShowResults(true);
    }

    function handleClassification(data) {
      setClassificationData(data.classificationData);
      setShowResults(false);
      setShowClassification(true);
    }

    function handleBonus(data) {
      console.log(data)
      setGhostPowerAvailableBonuses(data.ghostAvailableBonuses);
      setHelpPowerAvailableBonuses(data.helpAvailableBonuses);
      setX2PowerAvailableBonuses(data.x2AvailableBonuses);
    }

    function handleGhostData(data) {
      setGhostIconClicked(true);
      setGhostData(data.playersData);
      setShowGhostModal(true);
    }

    function handleGhostAnswer(data) {
      setGhostResponse(data.playerResponse);
      showGhostResponseSwal(data.playerResponse);
      setShowGhostModal(false);
    }

    function handleGhostAnswerNotReady(data) {
      showGhostResponseNotReadySwal();
    }

    function handleHasAnswered(data) {
      if (data.hasAnswered) {
        setAnswer(data.response);
        setHasAnswered(true);
      }
    }

    socket.on("nextQuestion", handleNextQuestion);
    socket.on("hasAnswered", handleHasAnswered);

    socket.on("bonus", handleBonus);
    socket.on("suggest", handleSuggest);
    socket.on("ghostData", handleGhostData);

    socket.on("ghostAnswer", handleGhostAnswer);
    socket.on("ghostAnswerNotReady", handleGhostAnswerNotReady);

    socket.on("results", handleResults);
    socket.on("classification", handleClassification);
    socket.on("clock", handleClockSound);
    socket.on("extremeClock", handleExtremeClockSound);
  
    return () => {
      socket.off("nextQuestion", handleNextQuestion);
      socket.off("hasAnswered", handleHasAnswered);
      socket.off("bonus", handleBonus);
      socket.off("suggest", handleSuggest);
      socket.off("ghostData", handleGhostData);
      socket.off("results", handleResults);
      socket.off("classification", handleClassification);
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

      <GhostModal
        ghostData={ghostData}
        playerId={localStorage.getItem('playerId')}
        showGhostModal={showGhostModal}
        setShowGhostModal={setShowGhostModal}
        handleSendGhost={handleSendGhost}
      />

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
        <h3 className="p-3">
          {question}
        </h3>

        { !hasAnswered && !showResults && !showClassification && (
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
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ width: '100%' }}

            >
              <CustomBoundaryButton isMin={true} message={min} helperUsed={helpIconClicked} prevMessage={previousMinMax.min} color="rgb(87, 169, 221)" />
              <input
                type="number"
                className="form-control"
                id="answerInput"
                value={answer || ''}
                onChange={(e) => {
                  setAnswer(e.target.value);
                  setShowError(false);
                }}
                style={{ fontSize: '1.3rem', padding: '10px', width: '60%' }}
              />
              <CustomBoundaryButton isMin={false} message={max} helperUsed={helpIconClicked} prevMessage={previousMinMax.max} color="rgb(87, 169, 221)" />
            </div>
            <input 
              type="range"
              className="form-range d-flex justify-content-center"
              min={min}
              max={max}
              step={step}
              id="answerSlider"
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
                setShowError(false);
              }}
              style={{ 
                height: '80px', 
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

              <div className="mt-5 d-flex">
                
                <div className="d-flex flex-column align-items-center">
                  <img
                    src={ghost_icon}
                    alt="Ghost icon"
                    className={`m-0 p-0 mx-3 ${ghostIconClicked ? 'box' : ''}`}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      opacity: ghostPowerAvailableBonuses > 0 ? "1" : "0.2",
                    }}
                    onClick={handleGhostIconClick}
                  />
                  <p style={{fontSize: "1.2em"}}>x {ghostPowerAvailableBonuses}</p>
                </div>

                <div className="d-flex flex-column align-items-center">
                  <img
                    src={help_icon}
                    alt="Help icon"
                    className={`m-0 p-0 mx-3 ${helpIconClicked ? 'box' : ''}`}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      opacity: helpPowerAvailableBonuses > 0 ? "1" : "0.2",
                    }}
                    onClick={handleHelpIconClick}
                  />
                  <p style={{fontSize: "1.2em"}}>x {helpPowerAvailableBonuses}</p>
                </div>

                <div className="d-flex flex-column align-items-center">
                  <img
                    src={x2_icon}
                    alt="X2 icon"
                    className={`m-0 p-0 mx-3 ${x2IconClicked ? 'box' : ''}`}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      opacity: x2PowerAvailableBonuses > 0 ? "1" : "0.2",
                    }}
                    onClick={handleX2IconClick}
                  />
                  <p style={{fontSize: "1.2em"}}>x {x2PowerAvailableBonuses}</p>
                </div>



              </div>

            </div>
            

          </form>
        )}

        { hasAnswered && !showResults && !showClassification && (
          <p>Aspettando le risposte degli altri giocatori...</p>
        )}

        { showClassification && (
          <div>
            <h3
              style={{
                fontFamily: "customFont",
                fontSize: "2rem",
                letterSpacing: "0.1rem",
              }}
            >
              Classifica
            </h3>
            {classificationData.map((playerData, index) => (
              playerData?.isActive && playerData.name ? (
                <div
                  key={index}
                  className="m-1"
                >
                  <p
                    className="p-0 m-0"
                    style={{
                      fontFamily: "customFont",
                      fontSize: "1.4rem",
                      letterSpacing: "0.1rem",
                    }}
                  >
                    {playerData.name} : {playerData.score}
                  </p>
                </div>
              ) : null
            ))}
          </div>
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
                className={"m-1 d-flex flex-align-items-center justify-content-center"}
                style={{height: "40px"}}
              >

                <p
                  className="p-0 m-0"
                  style={{
                    fontFamily: "customFont",
                    fontSize: "1.4rem",
                    letterSpacing: "0.1rem",
                  }}
                >
                  {playerAnswerData.name} : {playerAnswerData.answer}
                </p>

                <div className="mx-2 d-flex align-items-center">
                  {playerAnswerData.hasUsedX2 && (
                    <img
                      src={x2_icon}
                      alt="X2 icon"
                      className={`m-0 p-0`}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                    />
                  )}

                  {playerAnswerData.hasUsedHelp && (
                    <img
                      src={help_icon}
                      alt="help icon"
                      className={`m-0 p-0`}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                    />
                  )}

                  {playerAnswerData.hasUsedGhost && (
                    <img
                      src={ghost_icon}
                      alt="ghost icon"
                      className={`m-0 p-0`}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                    />
                  )}

                  {playerAnswerData.hasWon && (
                    <div className="image-container">
                      <img
                        src={win_icon}
                        alt="win icon"
                        className={`m-0 p-0 ms-3`}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  )}
                </div>
                


              </div>
            ))}
          </div>
        )}



      </div>
    </div>
  );
}

export default ClientGame;
