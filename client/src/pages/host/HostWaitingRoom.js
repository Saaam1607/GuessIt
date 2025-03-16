import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import socket from "../../assets/modules/socket";



function HostWaitingRoom() {

  const [playersList, setPlayersList] = useState([]);
  const navigate = useNavigate();

  function getPlayersList() {
    socket.emit("playersList", {});
  }

  function startGame() {
    socket.emit("startGame", {});
  }

  function startNewGame() {
    socket.emit("startNewGame", {});
  }

  useEffect(() => {

    getPlayersList();

    function handleNewPlayersList(data) {
      setPlayersList(data.playersList);
    }

    function handleGameStarted() {
      navigate("/host/console", { });
    }
  
    socket.on("playersList", handleNewPlayersList);
    socket.on("nextQuestion", handleGameStarted);

  
    return () => {
      socket.off("playersList", handleNewPlayersList);
      socket.off("nextQuestion", handleGameStarted);
    };

  }, [socket]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h3>Host Waiting Room</h3>
      <div className="m-3">
        <h5>Players currently connected:</h5>
        {playersList !== undefined > 0 && playersList.map((player, index) => (
          <p
            key={index}
            className={"m-1"}
          >
            {player}
          </p>
        ))}
      </div>

      <button
        className={"btn btn-primary btn-lg mb-3"}
        onClick={startGame}
      >
        Start Game
      </button>

      <button
        className={"btn btn-primary btn-lg"}
        onClick={startNewGame}
      >
        Start New Game
      </button>

    </div>
  );
};

export default HostWaitingRoom;
