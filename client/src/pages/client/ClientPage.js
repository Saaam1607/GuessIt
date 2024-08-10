import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from "../../components/CustomButton.js";
import CustomInput from "../../components/CustomInput.js";
import CustomDiv from "../../components/CustomDiv.js";

const backendUrl = process.env.REACT_APP_BACKEND_URL || "https://guessitserver.onrender.com";



function ClientPage() {

  const [name, setName] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  function tryToJoinGame() {
    if (name === "") {
      setShowError(true);
      return;
    }
    navigate("/client/game", { state: { name: name } });
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
        <CustomInput
          textLabel="Inserisci il tuo nickname"
          value={name}
          setValue={setName}
          setShowError={setShowError}
          placeholder="Nome"
        />
      </CustomDiv>



      <CustomDiv>
        <CustomButton
          message="Entra"
          onClickFunction={tryToJoinGame}
          color="rgb(87, 169, 221)"
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
          {showError ? "Inserisci un nome prima di giocare!" : ""}
        </p>
      </CustomDiv>

    </div>
  );
}

export default ClientPage;
