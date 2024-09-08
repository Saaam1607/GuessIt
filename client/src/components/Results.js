import React, { useState, useEffect } from 'react';
import ConfettiExplosion from "react-confetti-explosion";

import Classification from './Classification';
import ClassificationUserCard from './ClassificationUserCard';

import "./results.css";

const ghost_icon = require('../assets/images/ghost_icon.png');
const x2_icon = require('../assets/images/x2_icon.png');
const help_icon = require('../assets/images/help_icon.png');
const win_icon = require('../assets/images/win_icon.png');

const trophy = require('../assets/images/trophy.png');
const crown = require('../assets/images/crown.png');

const yusuf = require('../assets/images/yusuf.png');


function Results({ results, classificationData }) {

  const [isExploding, setIsExploding] = useState(false);

  const source = {
    position: "absolute",
    right: "50%",
    left: "50%",
    bottom: "50svh"
  };

  const bigExplodeProps = {
    force: 0.6,
    duration: 5000,
    particleCount: 200,
  };

  useEffect(() => {
    results.forEach((playerData) => {
      if (playerData.playerId == localStorage.getItem("playerId") && playerData?.hasWon == true) {
        setTimeout(() => {
          setIsExploding(true);
        }, 500);
      }
    })
  }, [results]);

  return (
    <>
      
      {isExploding && (
        <div style={source}>
          <ConfettiExplosion {...bigExplodeProps} />
        </div>
      )}
      
      <div className="panel" >
        <div className="results header" >
          <img src={trophy} alt="trophy" />
        </div>
        <div className="results-body">
          <table className="table p-0 m-0">
            <tbody className="table-body" >
              {results.map((playerAnswerData, index) => (
                playerAnswerData.isAnswer ? (
                  <tr key={index}>
                    <td></td>
                    <td style={{color: "green"}}>{playerAnswerData.answer}</td>
                    <td></td>
                    <td></td>
                  </tr>
                ) : (
                  <tr key={index}>
                    <td style={{ width: "50px" }}>                    
                      {playerAnswerData.hasWon && (
                          <div className="image-container">
                            <img src={win_icon} alt="win icon" />
                          </div>
                        )}
                      </td>
                    <td style={{ width: "75px", color: "#605e5c" }}>{playerAnswerData.answer}</td>
                    <td style={{ color: "#605e5c" }}>{playerAnswerData.name}</td>
                    <td>
                      <div className="mx-2 d-flex align-items-center" style={{width: "100%", height: "100%"}}>
                        {playerAnswerData.hasUsedX2 && ( <img src={x2_icon} alt="X2 icon" /> )}
                        {playerAnswerData.hasUsedHelp && ( <img src={help_icon} alt="help icon" /> )}
                        {playerAnswerData.hasUsedGhost && ( <img src={ghost_icon} alt="ghost icon" /> )}
                      </div>
                    </td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        </div>
        <div className="results footer" />
      </div>

      <div className="panel" >
        <div className="classification header" >
          <img src={crown} alt="crown" />
        </div>
        <div className="classification-body">
          {classificationData.map((playerData, index) => (
            playerData?.active && playerData.name && (
              <div className="d-flex align-items-center justify-content-start m-2">
                <ClassificationUserCard image={yusuf} name={playerData.name} score={playerData.score} isMovedUp={playerData.isMovedUp} isMovedDown={playerData.isMovedDown} />
              </div> 
            )
          ))}
        </div> 
        <div className="classification footer" />
      </div>
    </>
  );
};

export default Results;
