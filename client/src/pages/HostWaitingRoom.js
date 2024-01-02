import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';

const socket = io.connect("https://guessitserver.onrender.com");




function HostWaitingRoom() {

  const [playersList, setPlayersList] = useState([]);
  const navigate = useNavigate();

  function getPlayersList() {
    socket.emit("playersList", {});
  }

  function startGame() {
    socket.emit("startGame", {});
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
    socket.on("gameStarted", handleGameStarted);

  
    return () => {
      socket.off("playersList", handleNewPlayersList);
      socket.off("gameStarted", handleGameStarted);
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
        className={"btn btn-primary btn-lg"}
        onClick={startGame}
      >
        Start Game
      </button>

    </div>
  );
};

export default HostWaitingRoom;
