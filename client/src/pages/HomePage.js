import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from "../components/CustomButton.js";



function ClientPage() {

  const navigate = useNavigate();

  function goToClientPage() {
    navigate("/client", { });
  }

  function goToHostPage() {
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

      <CustomButton
        message="Giocatore"
        onClickFunction={goToClientPage}
        color="rgb(87, 169, 221)"
      />

      <CustomButton
        message="Host"
        onClickFunction={goToHostPage}
        color="rgb(87, 169, 221)"
      />

    </div>
  );
}

export default ClientPage;
