import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import CustomButton from "../../components/CustomButton.js";
import ControllerButton from "../../components/ControllerButton.js";

import Results from "../../components/Results.js";
import Classification from "../../components/Classification.js";



const socketUrl = process.env.REACT_APP_SOCKET_URL || "https://guessitserver.onrender.com";
const socket = io.connect(socketUrl);

const SoundManager = require('../../components/SoundManager.js');

const ghost_icon = require('../../assets/images/ghost_icon.png');
const x2_icon = require('../../assets/images/x2_icon.png');
const help_icon = require('../../assets/images/help_icon.png');
const win_icon = require('../../assets/images/win_icon.png');



function HostConsole() {

  const [playersAnswersData, setPlayersAnswersData] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(undefined);

  const [hasSentResults, setHasSentResults] = useState(false);

  const [showResults, setShowResults] = useState(false);
  const [showClassification, setShowClassification] = useState(false);

  const [results, setResults] = useState([]);
  const [classificationData, setClassificationData] = useState([]);



  function getQuestion() {
    SoundManager.playPowerSelection();
    socket.emit("getQuestion", {});
  }

  function sendResults() {
    SoundManager.playPowerSelection();
    if (!hasSentResults) {
      socket.emit("results", { playersAnswersData: playersAnswersData, computeScore: true });
      setHasSentResults(true);
    }
    else 
      socket.emit("results", { playersAnswersData: playersAnswersData, computeScore: false });
  }

  function sendClassification() {
    SoundManager.playPowerSelection();
    socket.emit("classification", {});
  }

  function sendNextQuestion() {
    setShowClassification(false);
    setShowResults(false);
    SoundManager.playPowerSelection();
    socket.emit("nextQuestion", {});
    setHasSentResults(false);
    setPlayersAnswersData([]);
  }

  function hurryUp() {
    SoundManager.playPowerSelection();
    socket.emit("hurryUp", {});
  }

  function extremeHurryUp() {
    SoundManager.playPowerSelection();
    socket.emit("extremeHurryUp", {});
  }

  function resetPoints() {
    SoundManager.playPowerSelection();
    socket.emit("resetPoints", {});
  }

  function addPowers() {
    SoundManager.playPowerSelection();
    socket.emit("addPower", {});
  }

  useEffect(() => {

    getQuestion();

    function handleNewAnswer(data) {
      setPlayersAnswersData((prevData) => [
        ...(prevData || []),
        { name: data.name || 'Unknown', answer: data.answer || 'No answer', playerId: data.playerId, hasUsedX2: data.hasUsedX2, hasUsedHelp: data.hasUsedHelp, hasUsedGhost: data.hasUsedGhost },
      ]);
    }

    function handleNextQuestion(data) {
      setQuestion(data.question);
    }

    function handleNextAnswer(data) {
      setAnswer(data.answer);
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
    }
  
    socket.on("nextQuestion", handleNextQuestion);
    socket.on("nextAnswer", handleNextAnswer);
    socket.on("newAnswer", handleNewAnswer);

    socket.on("results", handleResults);
    socket.on("classification", handleClassification);
  
    return () => {
      socket.off("newAnswer", handleNewAnswer);
      socket.off("nextQuestion", handleNextQuestion);

      socket.off("results", handleResults);
      socket.off("classification", handleClassification);
    };

  }, [socket]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h3>Host Console</h3>

      <div style={{width: "90%"}}>
        <h3>{question}</h3>
        <h4>{answer}</h4>
      </div>

      <div className="d-flex flex-wrap justify-content-center m-1" style={{gap: "15px"}}>
        <ControllerButton icon={"bi bi-patch-question"} color={"rgb(87, 169, 221)"} onClick={sendNextQuestion} />
        <ControllerButton icon={"bi bi-trophy"} color={"#00b300"} onClick={sendResults} />
        <ControllerButton icon={"bi bi-trophy-fill"} color={"#0c7518"} onClick={sendClassification} />
        <ControllerButton icon={"bi bi-magic"} color={"#edc71a"} onClick={addPowers} />
        <ControllerButton icon={"bi bi-alarm"} color={"#ff6600"} onClick={hurryUp} />
        <ControllerButton icon={"bi bi-alarm-fill"} color={"#ff0000"} onClick={extremeHurryUp} />
        <ControllerButton icon={"bi bi-eraser-fill"} color={"#4f2020"} onClick={resetPoints} />
      </div>

      {playersAnswersData !== undefined && playersAnswersData.map((playerAnswerData, index) => (
        <div key={index} className={"m-1"} >
          <p className="m-0 p-0">{playerAnswerData.name} : {playerAnswerData.answer}</p>
        </div>
      ))}

      { showClassification && (
        <Classification classificationData={classificationData} />
      )}

      { showResults && (
        <Results results={results} />
      )}

    </div>
  );
};

export default HostConsole;
