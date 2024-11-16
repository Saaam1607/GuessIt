import React, { useState, useEffect } from 'react';
import ConfettiExplosion from "react-confetti-explosion";

import Classification from './Classification';
import ClassificationUserCard from './ClassificationUserCard';
import ChoiceAnswerCard from './ChoiceAnswerCard';

import "./results.css";

const ghost_icon = require('../assets/images/ghost_icon.png');
const x2_icon = require('../assets/images/x2_icon.png');
const help_icon = require('../assets/images/help_icon.png');
const win_icon = require('../assets/images/win_icon.png');

const trophy = require('../assets/images/trophy.png');
const crown = require('../assets/images/crown.png');

const yusuf = require('../assets/images/yusuf.png');


function Results({ results, classificationData, questionType, availableAnswers }) {

  const [rightAnswer, setRightAnswer] = useState(null);
  const [isExploding, setIsExploding] = useState(false);
  const [isResultShowing, setIsResultShowing] = useState(true);

  function handleFlip() {
    setIsResultShowing((prev) => !prev);
  };

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
    console.log(availableAnswers)
    console.log(results);
    console.log(questionType)
    results.forEach((playerData) => {
      if (playerData.playerId == localStorage.getItem("playerId") && playerData?.hasWon == true) {
        setTimeout(() => {
          setIsExploding(true);
        }, 500);
      }
      if (playerData.isAnswer) {
        setRightAnswer(playerData.answer);
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
      
      <div className={`panel ${isResultShowing ? "" : "flipped"}`}>

        <div className="flip-card">
        
          <div className="front"> 
            
            <div className="results header" >
              <span className="result-button-span" onClick={handleFlip} >
                <img src={trophy} alt="trophy" />
              </span>
            </div>

            <div className="results-body">
              
              <div className="choice-answer-box-container" >

                {/* MULTIPLE CHOICE */}
                {questionType == 1 && ( 
                  availableAnswers.map((answer, index) => (
                    <div className="d-flex flex-column" style={{width:"48%"}}>
                      <ChoiceAnswerCard
                        key={index}
                        answer={answer.answer} 
                        isSelected={false}
                        isHidden={false}
                        isWinning={rightAnswer == answer.answer}
                        clickFunction={() => {}}
                      />
                      {results.map((playerAnswerData, index) => 
                        !playerAnswerData.isAnswer && playerAnswerData.answer == answer.answer && (
                          <div className="d-flex align-items-center">
                            <p key={index} className="m-0 me-2" style={{ color: "black" }}>
                              {playerAnswerData.name}
                            </p>
                            {playerAnswerData.hasUsedGhost && (
                              <div className="power-icon-container" style={{backgroundColor: "#4f4f4f"}} >
                                <img src={ghost_icon} alt="ghost icon" />
                              </div>
                            )}
                            {playerAnswerData.hasUsedHelp && (
                              <div className="power-icon-container" style={{backgroundColor: "#93d681"}} >
                                <img src={help_icon} alt="help icon" />
                              </div>
                            )}
                            {playerAnswerData.hasUsedHelp && (
                              <div className="power-icon-container" style={{backgroundColor: "#d6c481"}}>
                                <img src={x2_icon} alt="X2 icon" />
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  ))
                )} 

                {/* MULTIPLE CHOICE */}
                {questionType == 0 && (
                  <div className="d-flex flex-column">

                  {results.map((answer, index) => 
                    answer.isAnswer ? (
                      <p key={index} className="m-0 my-1 me-2">
                        {answer.answer}
                      </p>
                    ) : (
                      <div className="d-flex align-items-center">
                        <p key={index} className="m-0 my-1 me-2">
                          {answer.answer} - {answer.name}
                        </p>
                        {answer.hasWon && (
                          <div className="power-icon-container" style={{backgroundColor: "#4f4f4f"}} >
                            <img src={win_icon} alt="win icon" /> 
                          </div>
                        )}
                        {answer.hasUsedGhost && (
                          <div className="power-icon-container" style={{backgroundColor: "#4f4f4f"}} >
                            <img src={ghost_icon} alt="ghost icon" /> 
                          </div>
                        )}
                        {answer.hasUsedHelp && (
                          <div className="power-icon-container" style={{backgroundColor: "#93d681"}} >
                            <img src={help_icon} alt="help icon" />
                          </div>
                        )}
                        {answer.hasUsedHelp && (
                          <div className="power-icon-container" style={{backgroundColor: "#d6c481"}}>
                            <img src={x2_icon} alt="X2 icon" />
                          </div>
                        )}
                      </div>
                    )
                  )}


                  
                  </div>
                )}

              </div>

            </div>
            
          </div>

          <div className="back"> 
            <div className="classification header" >
              <span className="result-button-span" onClick={handleFlip} >
                <img src={crown} alt="crown" />
              </span>
            </div>

            <div className="results-body">
              {classificationData.map((playerData, index) => (
                playerData?.active && playerData.name && (
                  <div className="m-2 px-4" style={{width: "100%"}}>
                    <ClassificationUserCard image={yusuf} name={playerData.name} score={playerData.score} isMovedUp={playerData.isMovedUp} isMovedDown={playerData.isMovedDown} />
                  </div> 
                )
              ))}
            </div> 
          </div>

        </div>
      </div>
    </>
  );
};

export default Results;
