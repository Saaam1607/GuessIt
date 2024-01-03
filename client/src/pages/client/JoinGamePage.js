import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import CustomButton from "../../components/CustomButton.js";

const backendUrl = process.env.REACT_APP_BACKEND_URL || "https://guessitserver.onrender.com";



function JoinGamePage() {

  const location = useLocation();
  const playerName = location.state?.playerName || "DefaultPlayerName";
  const [gameCode, setGameCode] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  function backToClientHomePage() {
    navigate("/client");
  }

  function joinGame(id) {
    fetch(`${backendUrl}/api/v1/game/join/code/` + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: playerName }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error joining game");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/client/game", { state: { gameCode: gameCode, playerName: playerName } });
      })
  }

  function tryToJoinGame() {
    if (gameCode === "") {
      setShowError(true);
      return;
    }
    joinGame(gameCode);
  }



  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <p>Benvenuto {playerName}!</p>
      <form className="m-1">
        <div className="form-group">
        <label>Inserisci il codice della partita</label>
        <input
          type="string"
          className="form-control"
          placeholder="codice"
          value={gameCode}
          onChange={(e) => {
            setGameCode(e.target.value)
            setShowError(false)
          }}
        />
        </div>
      </form>

      <CustomButton
        message="Entra"
        onClickFunction={tryToJoinGame}
        color="rgb(87, 169, 221)"
      />

      <CustomButton
        message="Indietro"
        onClickFunction={backToClientHomePage}
        color="rgb(221, 0, 47)"
      />

      <p className="text-danger m-1">
        {showError ? "Please enter a game code first" : ""}
      </p>

    </div>
  );
}

export default JoinGamePage;
