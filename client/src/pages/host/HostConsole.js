import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import CustomButton, { CustomButtonSmaller } from "../../components/CustomButton.js";

const socketUrl = process.env.REACT_APP_SOCKET_URL || "https://guessitserver.onrender.com";
const socket = io.connect(socketUrl);


function HostConsole() {

  const [playersAnswersData, setPlayersAnswersData] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(undefined);

  const [hasSentResults, setHasSentResults] = useState(false);

  function getQuestion() {
    socket.emit("getQuestion", {});
  }

  function sendResults() {
    if (!hasSentResults) {
      socket.emit("results", { playersAnswersData: playersAnswersData, computeScore: true });
      setHasSentResults(true);
    }
    else 
      socket.emit("results", { playersAnswersData: playersAnswersData, computeScore: false });
  }

  function sendClassification() {
    socket.emit("classification", {});
  }

  function sendNextQuestion() {
    socket.emit("nextQuestion", {});
    setHasSentResults(false);
    setPlayersAnswersData([]);
  }

  function hurryUp() {
    socket.emit("hurryUp", {});
  }

  function extremeHurryUp() {
    socket.emit("extremeHurryUp", {});
  }

  function resetPoints() {
    socket.emit("resetPoints", {});
  }

  function addPowers() {
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
        <h3>{question}</h3>
        <h4>{answer}</h4>
        {playersAnswersData !== undefined && playersAnswersData.map((playerAnswerData, index) => (
          <div
            key={index}
            className={"m-1"}
          >
            <p className="m-0 p-0">{playerAnswerData.name} : {playerAnswerData.answer}</p>
          </div>
        ))}
      </div>

      <div className="m-1">
        <CustomButtonSmaller
          message={"Invia Prossima Domanda"}
          color={"rgb(87, 169, 221)"}
          onClickFunction={sendNextQuestion}
        />
      </div>

      <div className="m-1">
        <CustomButtonSmaller
          message={"Invia Risultati"}
          color={"#00b300"}
          onClickFunction={sendResults}
        />
      </div>

      <div className="m-1">
        <CustomButtonSmaller
          message={"Invia Classifica"}
          color={"#00b300"}
          onClickFunction={sendClassification}
        />
      </div>

      <div className="m-1">
        <CustomButtonSmaller
          message={"Aggiungi poteri"}
          color={"#0a6623"}
          onClickFunction={addPowers}
        />
      </div>

      <div className="m-1">
        <CustomButtonSmaller
          message={"Metti Fretta"}
          color={"#ff6600"}
          onClickFunction={hurryUp}
        />
      </div>

      <div className="m-1">
        <CustomButtonSmaller
          message={"Metti Fretta Estremo"}
          color={"#ff0000"}
          onClickFunction={extremeHurryUp}
        />
      </div>

      <div className="m-1">
        <CustomButtonSmaller
          message={"Reset punti"}
          color={"#4f2020"}
          onClickFunction={resetPoints}
        />
      </div>

    </div>
  );
};

export default HostConsole;
