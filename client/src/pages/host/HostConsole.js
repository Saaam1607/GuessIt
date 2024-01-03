import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import CustomButton from "../../components/CustomButton.js";

const socketUrl = process.env.REACT_APP_SOCKET_URL || "https://guessitserver.onrender.com";
const socket = io.connect(socketUrl);


function HostConsole() {

  const [playersAnswersData, setPlayersAnswersData] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(undefined);

  function getQuestion() {
    socket.emit("getQuestion", {});
  }

  function sendResults() {
    socket.emit("results", { playersAnswersData: playersAnswersData });
  }

  function sendNextQuestion() {
    socket.emit("nextQuestion", {});
    setPlayersAnswersData([]);
  }

  function hurryUp() {
    socket.emit("hurryUp", {});
  }

  function extremeHurryUp() {
    socket.emit("extremeHurryUp", {});
  }

  useEffect(() => {

    getQuestion();

    function handleNewAnswer(data) {
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

      <div className="m-2">
        <CustomButton
          message={"Invia Prossima Domanda"}
          color={"rgb(87, 169, 221)"}
          onClickFunction={sendNextQuestion}
        />
      </div>

      <div className="m-2">
        <CustomButton
          message={"Invia Risultati"}
          color={"#00b300"}
          onClickFunction={sendResults}
        />
      </div>

      <div className="m-2">
        <CustomButton
          message={"Metti Fretta"}
          color={"#ff6600"}
          onClickFunction={hurryUp}
        />
      </div>

      <div className="m-2">
        <CustomButton
          message={"Metti Fretta Estremo"}
          color={"#ff0000"}
          onClickFunction={extremeHurryUp}
        />
      </div>

    </div>
  );
};

export default HostConsole;
