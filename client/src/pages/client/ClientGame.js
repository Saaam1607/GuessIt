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
import GuessButton from "../../components/GuessButton.js";

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
  const [image, setImage] = useState("");
  const [answer, setAnswer] = useState("");
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

  const [isGhostIconGlowing, setIsGhostIconGlowing] = useState(false);
  const [isHelpIconGlowing, setIsHelpIconGlowing] = useState(false);
  const [isX2IconGlowing, setIsX2IconGlowing] = useState(false);

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

  function getBonus() {
    socket.emit("getBonus", { playerId: localStorage.getItem('playerId') });
  }

  function checkIfAlreadyAnswered() {
    socket.emit("hasAnswered", { playerId: localStorage.getItem('playerId') });
  }

  function sendAnswer() {
    if (hasAnswered) {
      return;
    }

    if (answer === undefined || answer === "") {
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
    getBonus();

    function handleNextQuestion(data) {
      setQuestion(data.question);
      setMin(data.min);
      setMax(data.max);
      setPreviousMinMax({ min: data.min, max: data.max });
      setStep(data.step);
      setUnit(data.unit);
      setImage(data.image);
      computeTempAnswer(data.min, data.max, data.step);
      setHasAnswered(false);
      setShowResults(false);
      setShowClassification(false);

      setGhostIconClicked(false);
      setHelpIconClicked(false);
      setX2IconClicked(false);

      setGhostData([]);

      SoundManager.playNewQuestionSound();

      getBonus();

    }

    function handleResults(data) {
      setResults(data.playersAnswersData);
      setClassificationData(data.classificationData);
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

      console.log(data);

      if (data.powerIndex == 0)
        setIsGhostIconGlowing(true);
      else if (data.powerIndex == 1) 
        setIsHelpIconGlowing(true);
      else if (data.powerIndex == 2)
        setIsX2IconGlowing(true);

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
      setGhostIconClicked(false);
      setShowGhostModal(false);
    }

    function handleHasAnswered(data) {
      if (data.hasAnswered) {
        setAnswer(data.response);
        setHasAnswered(true);
      }
    }

    // function handleUpdateName(data) {
    //   localStorage.setItem('playerId', data.playerId);
    // }

    function recover() {
      alert("A")
      window.location.reload();
    }

    socket.on("nextQuestion", handleNextQuestion);
    socket.on("hasAnswered", handleHasAnswered);
    // socket.on("updateName", handleHasAnswered);

    socket.on("bonus", handleBonus);
    socket.on("suggest", handleSuggest);
    socket.on("ghostData", handleGhostData);

    socket.on("ghostAnswer", handleGhostAnswer);
    socket.on("ghostAnswerNotReady", handleGhostAnswerNotReady);

    socket.on("results", handleResults);
    socket.on("classification", handleClassification);
    socket.on("clock", handleClockSound);
    socket.on("extremeClock", handleExtremeClockSound);

    socket.on("recover", recover);

    return () => {
      socket.off("nextQuestion", handleNextQuestion);
      socket.off("hasAnswered", handleHasAnswered);
      // socket.off("updateName", handleUpdateName);
      socket.off("bonus", handleBonus);
      socket.off("suggest", handleSuggest);
      socket.off("ghostData", handleGhostData);
      socket.off("results", handleResults);
      socket.off("classification", handleClassification);
      socket.off("clock", handleClockSound);
      socket.off("extremeClock", handleExtremeClockSound);
      socket.off("recover", recover);

    };

  }, [socket]);

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100%", width: "100%" }}
    >

      <GhostModal
        ghostData={ghostData}
        playerId={localStorage.getItem('playerId')}
        showGhostModal={showGhostModal}
        setShowGhostModal={setShowGhostModal}
        handleSendGhost={handleSendGhost}
      />

      <div
        className={"d-flex flex-column align-items-center justify-content-start "}
        style={{ borderRadius: "10px", width: "100%", height: "100%", overflowY: "auto" }}
      >

        <QuestionBox
          question={question} image={image} showImage={!showResults && !showClassification}
          ghostIconClicked={ghostIconClicked} ghostPowerAvailableBonuses={ghostPowerAvailableBonuses} handleGhostIconClick={handleGhostIconClick}
          x2IconClicked={x2IconClicked} x2PowerAvailableBonuses={x2PowerAvailableBonuses} handleX2IconClick={handleX2IconClick}
          helpIconClicked={helpIconClicked} helpPowerAvailableBonuses={helpPowerAvailableBonuses} handleHelpIconClick={handleHelpIconClick}
          isGhostIconGlowing={isGhostIconGlowing} isHelpIconGlowing={isHelpIconGlowing} isX2IconGlowing={isX2IconGlowing}
          setIsGhostIconGlowing={setIsGhostIconGlowing} setIsHelpIconGlowing={setIsHelpIconGlowing} setIsX2IconGlowing={setIsX2IconGlowing}
        />

        { !hasAnswered && !showResults && !showClassification && (
          <form
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ width: "100%", height: "100%"}}
            onSubmit={(e) => {
              e.preventDefault();
              sendAnswer();
            }}
          >

            <div className="d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
              <AnswerBox
                answer={answer} setAnswer={setAnswer} sendAnswer={sendAnswer}
                min={min} max={max} step={step}
                helpIconClicked={helpIconClicked}
                prevMin={previousMinMax.min} prevMax={previousMinMax.max}
              />
            </div>

            <div
              className="d-flex flex-column align-items-center justify-content-end"
              style={{ width: "100%", height: "fit-content" }}
            >
              <GuessButton type="submit" />
            </div>

          </form>
        )}

        { hasAnswered && !showResults && !showClassification && (
          <p>Aspettando le risposte degli altri giocatori...</p>
        )}

        { showResults && (
          <Results results={results} classificationData={classificationData} />
        )}

      </div>
    </div>
  );
}

export default ClientGame;
