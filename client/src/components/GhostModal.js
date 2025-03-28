import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import { Modal, Button } from "react-bootstrap";

import './buttonAnimation.css';

const ghost_icon = require('../assets/images/ghost_icon.png');



function GhostModal({ playerId, handleSendGhost }) {
  
  const ghostData = useSelector((state) => state.ghostData);

  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  function handleGhostIconClick() {
    if (selectedPlayerId != null) {
      handleSendGhost(selectedPlayerId);
    }
  }

  return (
    <>
      {ghostData.ghostData.length > 0 && (
        <Modal show={ghostData.showGhostModal}>
          <Modal.Body className="d-flex flex-column align-items-center">
          {ghostData.ghostData.map((player) => (
              <div key={player.playerId} className="mb-2">
                <button
                  className={`px-6 py-2 ${selectedPlayerId == player.playerId ? 'glow-on-hover' : ''}`}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "1.5rem",
                  }}
                  onClick={() => setSelectedPlayerId(player.playerId)}
                >
                  {player.name}
                </button>
              </div>
          ))}
          </Modal.Body>
          
          <Modal.Footer className="d-flex justify-content-center">
            <img
              src={ghost_icon}
              alt="Ghost icon"
              className={`m-0 p-0`}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "black",
                border: "10px solid black",
              }}
              onClick={handleGhostIconClick}
            />
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default GhostModal;
