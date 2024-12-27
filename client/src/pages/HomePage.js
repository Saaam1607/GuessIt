import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from "../components/CustomButton.js";
import CustomDiv from "../components/CustomDiv.js";

const SoundManager = require('../components/SoundManager.js');



function ClientPage() {

  const navigate = useNavigate();

  function goToClientPage() {
    SoundManager.playMenuSelect();
    navigate("/client", { });
  }

  function goToHostPage() {
    SoundManager.playMenuSelect();
    navigate("/host", { });
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
        <CustomButton
          message="Giocatore"
          onClickFunction={goToClientPage}
          color="rgb(87, 169, 221)"
        />
      </CustomDiv>

      <CustomDiv>
        <CustomButton
          message="Host"
          onClickFunction={goToHostPage}
          color="rgb(87, 169, 221)"
        />
      </CustomDiv>

    </div>
  );
}

export default ClientPage;
