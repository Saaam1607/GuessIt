import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



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
        <label>Enter your name</label>
        <input
          type="string"
          className="form-control"
          placeholder="your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            setShowError(false)
          }}
        />
        </div>
      </form>
      <button
        type="button"
        className="btn btn-primary m-1"
        onClick={goToCreateGamePage}
      >
        Create a new game
      </button>
      <button
        type="button"
        className="btn btn-primary m-1"
        onClick={goToJoinGamePage}
      >
        Join a game
      </button>
      
      <p className="text-danger m-1">
        {showError ? "Please enter your name first" : ""}
      </p>
    </div>
  );
}

export default ClientPage;
