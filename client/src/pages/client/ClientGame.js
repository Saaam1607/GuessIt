import React, { useState, useEffect, useRef } from "react";
import { io } from 'socket.io-client';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




import CustomButton from "../../components/CustomButton.js";
import CustomBoundaryButton from "../../components/CustomBoundaryButton.js";

import QuestionBox from "../../components/QuestionBox.js";
import AnswerBox from "../../components/AnswerBox.js";
import PowerSelector from "../../components/PowerSelector.js";
import GhostModal from "../../components/GhostModal.js";
import Results from "../../components/Results.js";
import Classification from "../../components/Classification.js";

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

  const [results, setResults] = useState([]);
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
    socket.emit("join", { name: "", playerId: localStorage.getItem('playerId'), characterIndex: localStorage.getItem('characterIndex') });
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

  function showGhostResponseEmptySwal() {
    Swal.fire({
      title: "Nessun fantasma ha risposto",
      timer: 1500,
      showConfirmButton: false,
    })
  }

  function showGhostResponseNotReadySwal() {
    Swal.fire({
      title: "Non ha ancora risposto",
      timer: 1500,
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
      SoundManager.playPowerSelection();
      SoundManager.playGhost();
      socket.emit("ghost", {});
    }
  }

  function handleHelpIconClick() {
    if (helpPowerAvailableBonuses && !helpIconClicked) {
      SoundManager.playPowerSelection();
      socket.emit("help", { playerId: localStorage.getItem('playerId') });
    }
  }


  function handleSuggest(data) {
    SoundManager.playHelp();
    setHelpIconClicked(true);
    setMin(data.suggestedMin);
    setMax(data.suggestedMax);
    computeTempAnswer(data.suggestedMin, data.suggestedMax, data.step);
  }

  function handleX2IconClick() {
    if (x2PowerAvailableBonuses && !x2IconClicked) {
      SoundManager.playPowerSelection();
      SoundManager.playX2();
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

      SoundManager.playNewQuestionSound();

      socket.emit("getBonus", { playerId: localStorage.getItem('playerId') });

    }

    function handleResults(data) {
      setResults(data.playersAnswersData);
      setShowClassification(false);
      setShowResults(true);
      SoundManager.playResults();
    }

    function handleClassification(data) {
      setClassificationData(data.classificationData);
      setShowResults(false);
      setShowClassification(true);
      SoundManager.playClassification();
      console.log(data.classificationData);

    }

    function handleBonus(data) {
      setGhostPowerAvailableBonuses(data.ghostAvailableBonuses);
      setHelpPowerAvailableBonuses(data.helpAvailableBonuses);
      setX2PowerAvailableBonuses(data.x2AvailableBonuses);
    }

    function handleGhostData(data) {
      var playersData = data.playersData;

      playersData = playersData.filter(player => player.playerId != localStorage.getItem('playerId'));
      playersData = playersData.filter(player => player.active == true);
      
      if (playersData.length == 0) {
        showGhostResponseEmptySwal();
        return;
      }

      setGhostIconClicked(true);
      setGhostData(playersData);
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
      className="d-flex flex-column align-items-center justify-content-center border-4"
      style={{ height: "90%", width: "100%" }}
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
        style={{ borderRadius: "30px", width: "90%", height: "100%" }}
      >

        <QuestionBox question={question} />

        { !hasAnswered && !showResults && !showClassification && (
          <form
            className=" border-4 d-flex flex-column align-items-center justify-content-center p-3"
            style={{ height: "100%"}}
            onSubmit={(e) => {
              e.preventDefault();
              sendAnswer();
            }}
          >

            <AnswerBox
              answer={answer} setAnswer={setAnswer} sendAnswer={sendAnswer}
              min={min} max={max} step={step}
              helpIconClicked={helpIconClicked}
              prevMin={previousMinMax.min} prevMax={previousMinMax.max}
              setShowError={setShowError}
            />

            <div
              className=" d-flex flex-column align-items-center justify-content-center"
              style={{ width: "100%", height: "100%" }}
            >
              <CustomButton message="Invia" color="rgb(87, 169, 221)" type="submit" />

              <p className="text-danger m-1">
                {showError && "Please enter a valid answer!"}
              </p>

              <PowerSelector
                ghostIconClicked={ghostIconClicked} ghostPowerAvailableBonuses={ghostPowerAvailableBonuses} handleGhostIconClick={handleGhostIconClick}
                x2IconClicked={x2IconClicked} x2PowerAvailableBonuses={x2PowerAvailableBonuses} handleX2IconClick={handleX2IconClick}
                helpIconClicked={helpIconClicked} helpPowerAvailableBonuses={helpPowerAvailableBonuses} handleHelpIconClick={handleHelpIconClick}
              />

            </div>

          </form>
        )}

        { hasAnswered && !showResults && !showClassification && (
          <p>Aspettando le risposte degli altri giocatori...</p>
        )}

        { showClassification && (
          <Classification classificationData={classificationData} />
        )}

        { showResults && (
          <Results results={results} />
        )}

      </div>
    </div>
  );
}

export default ClientGame;
