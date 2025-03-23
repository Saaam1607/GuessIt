import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from "../../components/CustomButton.js";
import ControllerButton from "../../components/ControllerButton.js";

import Results from "../../components/Results.js";
import QuestionBox from "../../components/QuestionBox.js";

import socket from "../../assets/modules/socket";



const SoundManager = require('../../components/SoundManager.js');

const ghost_icon = require('../../assets/images/ghost_icon.png');
const x2_icon = require('../../assets/images/x2_icon.png');
const help_icon = require('../../assets/images/help_icon.png');
const win_icon = require('../../assets/images/win_icon.png');



function HostConsole() {

  const navigate = useNavigate();

  const [questionType, setQuestionType] = useState("");

  const [playersAnswersData, setPlayersAnswersData] = useState([]);
  
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(undefined);
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [image, setImage] = useState("");

  const [availableAnswers, setAvailableAnswers] = useState([]);

  const [hasSentResults, setHasSentResults] = useState(false);

  const [showResults, setShowResults] = useState(false);

  const [results, setResults] = useState([]);
  const [classificationData, setClassificationData] = useState([]);



  function getQuestion() {
    SoundManager.playPowerSelection();
    socket.emit("getQuestion", {});
  }

  function sendResults() {
    SoundManager.playPowerSelection();
    if (!hasSentResults) {
      socket.emit("results", true );
      setHasSentResults(true);
    }
    else 
      socket.emit("results", false );
  }

  function sendNextQuestion() {
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

  function reset() {
    SoundManager.playPowerSelection();
    socket.emit("reset");
  }

  function addPowers() {
    SoundManager.playPowerSelection();
    socket.emit("addPower", {});
  }

  useEffect(() => {

    getQuestion();

    function handleNewAnswerFromPlayer(data) {
      setPlayersAnswersData((prevData) => [
        ...(prevData || []),
        { name: data.name || 'Unknown', answer: data.answer || 'No answer', playerId: data.playerId, hasUsedX2: data.hasUsedX2, hasUsedHelp: data.hasUsedHelp, hasUsedGhost: data.hasUsedGhost },
      ]);
    }

    function handleNextQuestion(data) {
      setQuestionType(data.questionType);
      setQuestion(data.question);
      setImage(data.image);

      switch (data.questionType) {
        case 0:
          setMin(data.min);
          setMax(data.max);
          break;
        case 1:
          setAvailableAnswers(data.availableAnswers);
          break;
        default:
          break;
      }
    }

    function handlePlayerList(data) {
    }

    function handleNextAnswer(data) {
      setAnswer(data.answer);
    }

    function handleResults(data) {
      setResults(data.playersAnswersData);
      setClassificationData(data.playersAnswersData);
      setShowResults(true);
    }

    function handleReset() {
      navigate("/", { });
    }

    socket.on("nextQuestion", handleNextQuestion);
    socket.on("nextAnswer", handleNextAnswer);
    socket.on("newAnswerFromPlayer", handleNewAnswerFromPlayer);
    socket.on("playersList", handlePlayerList)

    socket.on("results", handleResults);
    socket.on("reset", handleReset);
  
    return () => {
      socket.off("nextQuestion", handleNextQuestion);
      socket.off("nextAnswer", handleNextAnswer);
      socket.off("newAnswerFromPlayer", handleNewAnswerFromPlayer);
      socket.off("playersList", handlePlayerList)

      socket.off("results", handleResults);
      socket.off("reset", handleReset);
    };

  }, [socket]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-start" style={{ height: "100%", width: "100%", overflowY: "auto" }}>
      <div className="d-flex flex-column align-items-center justify-content-center" style={{width: "100%" }}>
        
        <QuestionBox
            showImage={!showResults}
            handleGhostIconClick={()=>{}}
            handleX2IconClick={()=>{}}
            handleHelpIconClick={()=>{}}
          />

        {questionType == 1 && availableAnswers.map((answer, index) => (
          <p className="p-0 m-0">{answer.answer}</p>
        ))}
        
        {questionType == 0 && (
          <h4>min: {min}, max: {max}</h4>
        )}
        
        <h4>{answer}</h4>
      
      </div>

      <div className="d-flex flex-wrap justify-content-center m-1" style={{gap: "15px"}}>
        <ControllerButton icon={"bi bi-patch-question"} color={"rgb(87, 169, 221)"} onClick={sendNextQuestion} />
        <ControllerButton icon={"bi bi-trophy"} color={"#00b300"} onClick={sendResults} />
        <ControllerButton icon={"bi bi-magic"} color={"#edc71a"} onClick={addPowers} />
        <ControllerButton icon={"bi bi-alarm"} color={"#ff6600"} onClick={hurryUp} />
        <ControllerButton icon={"bi bi-alarm-fill"} color={"#ff0000"} onClick={extremeHurryUp} />
        <ControllerButton icon={"bi bi-eraser"} color={"#4f2020"} onClick={reset} />
      </div>

      {playersAnswersData !== undefined && playersAnswersData.map((playerAnswerData, index) => (
        <div key={index} className={"m-1"} >
          <p className="m-0 p-0">{playerAnswerData.name} : {playerAnswerData.answer}</p>
        </div>
      ))}

      { showResults && (
        <Results results={results} classificationData={classificationData} />
      )}

    </div>
  );
};

export default HostConsole;
