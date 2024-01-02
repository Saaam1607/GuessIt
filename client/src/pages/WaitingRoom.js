import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';

const socket = io.connect("https://guessitserver.onrender.com");



function WaitingRoom() {

  const location = useLocation();
  const playerName = location.state?.playerName || "DefaultPlayerName";
  const [playersList, setPlayersList] = useState([]);
  const navigate = useNavigate();

  function joinGame() {
    socket.emit("join", { name: playerName, playerId: localStorage.getItem('playerId') });
  }

  function getPlayersList() {
    socket.emit("playersList", {});
  }

  useEffect(() => {

    joinGame();
    getPlayersList();

    function handleNewPlayerId(data) {
      localStorage.setItem('playerId', data.newPlayerId);
    }

    function handleNewPlayersList(data) {
      setPlayersList(data.playersList);
    }

    function handleGameStarted() {
      navigate("/client/play", { });
    }
  
    socket.on("newPlayerId", handleNewPlayerId);
    socket.on("playersList", handleNewPlayersList);
    socket.on("gameStarted", handleGameStarted);
  
    return () => {
      socket.off("user newPlayerId", handleNewPlayerId);
      socket.off("playersList", handleNewPlayersList);
      socket.off("gameStarted", handleGameStarted);
    };

  }, [socket]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div
        className={"d-flex flex-column align-items-center justify-content-center bg-light m-3 p-2"}
        style={{
          borderRadius: "30px",
          width: "80%",
        }}
      >
        <h1>Players Ready</h1>
        {playersList !== undefined > 0 && playersList.map((player, index) => (
          <p
            key={index}
            className={"display-5 m-2"}
          >
            {player}
          </p>
        ))}
      </div>
    </div>
  );
}

export default WaitingRoom;
