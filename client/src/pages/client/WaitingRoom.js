import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';

import CustomButton from "../../components/CustomButton.js";

const socketUrl = process.env.REACT_APP_SOCKET_URL || "https://guessitserver.onrender.com";
const socket = io.connect(socketUrl);


function WaitingRoom() {

  const location = useLocation();
  const playerName = location.state?.name || "DefaultPlayerName";
  const [playersList, setPlayersList] = useState([]);
  const navigate = useNavigate();

  function joinGame() {
    socket.emit("join", { name: playerName, playerId: localStorage.getItem('playerId'), characterIndex: localStorage.getItem('characterIndex') });
  }

  function getPlayersList() {
    socket.emit("playersList", {});
  }

  useEffect(() => {

    console.log("WaitingRoom useEffect");
    console.log("playerName: " + playerName);

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
    <div
      className="d-flex flex-column align-items-center border"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <div
        className={"d-flex flex-column align-items-center justify-content-top bg-light border"}
        style={{
          borderRadius: "30px",
          width: "80%",
          height: "90%",
        }}
      >

        <div>
          <h1
            className={"m-0 mt-2 mb-4"}
            style={{
              fontFamily: "customFont",
              fontSize: "2.5rem",
              letterSpacing: "0.05rem",
              color: "rgb(112,128,144)",
            }}
          >
            Giocatori in attesa
          </h1>
        </div>

        <div
          className=""
          style={{
            width: "80%",
            height: "60%",
            overflow: "auto",
          }}
        >
          {playersList !== undefined > 0 && playersList.map((player, index) => (
            <p
              key={index}
              className={"display-5 m-0 mb-2"}
              style={{
                fontFamily: "customFont",
                fontSize: "2rem",
                letterSpacing: "0.05rem",
                textAlign: "center",
              }}
            >
              {player}
            </p>
          ))}
        </div>

      </div>
    </div>
  );
}

export default WaitingRoom;
