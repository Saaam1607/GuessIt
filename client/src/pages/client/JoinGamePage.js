import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import CustomButton from "../../components/CustomButton.js";
import CustomInput from "../../components/CustomInput.js";
import CustomDiv from "../../components/CustomDiv.js";

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

      <CustomDiv>
        <p
          style={{
            fontFamily: "customFont",
            fontSize: "2rem",
            letterSpacing: "0.1rem",
            color: "rgb(112,128,144)",
          }}
        >
          Benvenuto <b>{playerName}</b>!
        </p>
      </CustomDiv>

      <CustomDiv>
        <form>
          <div className="form-group">
            <CustomInput
              textLabel="Inserisci il codice della partita"
              value={gameCode}
              setValue={setGameCode}
              setShowError={setShowError}
              placeholder="codice"
            />
          </div>
        </form>
      </CustomDiv>

      <CustomDiv>
        <CustomButton
          message="Entra"
          onClickFunction={tryToJoinGame}
          color="rgb(87, 169, 221)"
        />
      </CustomDiv>

      <CustomDiv>
        <CustomButton
          message="Indietro"
          onClickFunction={backToClientHomePage}
          color="rgb(221, 0, 47)"
        />
      </CustomDiv>

      <CustomDiv>
        <p
          className="text-danger"
          style={{
            fontFamily: "customFont",
            fontSize: "1.2rem",
            letterSpacing: "0.05rem",
            textAlign: "center",
          }}
        >          
          {showError ? "Please enter a game code first" : ""}
        </p>
      </CustomDiv>

    </div>
  );
}

export default JoinGamePage;
