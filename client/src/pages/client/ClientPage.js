import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from "../../components/CustomButton.js";



function ClientPage() {

  const [name, setName] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();


  function goToJoinGamePage() {
    if (name === "") {
      setShowError(true);
      return;
    }
    navigate("/client/join", { state: { playerName: name } });
  }

  function goToCreateGamePage() {
    if (name === "") {
      setShowError(true);
      return;
    }
    navigate("/client/create", { state: { playerName: name } });
  }

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <form className="m-1">
        <div className="form-group">
        <label>Inserisci il tuo nome</label>
        <input
          type="string"
          className="form-control"
          placeholder="nome"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            setShowError(false)
          }}
        />
        </div>
      </form>

      <CustomButton
        message="Crea una partita"
        onClickFunction={goToCreateGamePage}
        color="rgb(87, 169, 221)"
      />

      <CustomButton
        message="Entra in una partita"
        onClickFunction={goToJoinGamePage}
        color="rgb(87, 169, 221)"
      />
      
      <p className="text-danger m-1">
        {showError ? "Inserisci un nome prima di giocare" : ""}
      </p>
    </div>
  );
}

export default ClientPage;
