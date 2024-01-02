import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';





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
      <button
        type="button"
        className="btn btn-primary m-1"
        onClick={goToClientPage}
      >
        Client
      </button>
      <button
        type="button"
        className="btn btn-primary m-1"
        onClick={goToHostPage}
      >
        Host
      </button>

    </div>
  );
}

export default ClientPage;
