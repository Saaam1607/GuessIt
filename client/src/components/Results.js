import React, { useState, useEffect } from 'react';
import ConfettiExplosion from "react-confetti-explosion";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import Classification from './Classification';
import ClassificationUserCard from './ClassificationUserCard';
import ChoiceAnswerCard from './ChoiceAnswerCard';
import InfoButton from './InfoButton';

import 'react-vertical-timeline-component/style.min.css';
import "./results.css";

const ghost_icon = require('../assets/images/ghost_icon.png');
const x2_icon = require('../assets/images/x2_icon.png');
const help_icon = require('../assets/images/help_icon.png');
const win_icon = require('../assets/images/win_icon.png');

const trophy = require('../assets/images/trophy.png');
const crown = require('../assets/images/crown.png');

const jack = require('../assets/images/jack.png');
const giorgio = require('../assets/images/giorgio.png');
const yusuf = require('../assets/images/yusuf.png');
const roccia = require('../assets/images/roccia.png');

function TrophyIcon() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{width: "100%", height: "100%"}}>
      <img src={trophy} style={{minWidth: "30px", height: "auto"}} />
    </div>
  )
}

function getImageFromCharacterIndex(characterIndex) {
  switch (characterIndex) {
    case 0:
      return jack;
    case 1:
      return giorgio;
    case 2:
      return yusuf;
    case 3:
      return roccia;
    default:
      return;
  }
}



  



function Results({ results, classificationData, questionType, availableAnswers, explanation }) {

  const [rightAnswer, setRightAnswer] = useState(null);
  const [isExploding, setIsExploding] = useState(false);
  const [isResultShowing, setIsResultShowing] = useState(true);

  const [isInfoExpanded, setIsInfoExpanded] = React.useState(false);

  function handleInfoClick() {
    setIsInfoExpanded((prev) => !prev);
  }
  
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

  const basicIconStyle = {
    background: 'black',
    color: 'black',
    scale: "0.5",
  };

  const winnerIconStyle = {
    background: 'gold',
    color: 'gold',
  };


    // message={isLoggedIn ? 'Welcome back!' : 'Please log in.'}


  useEffect(() => {
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

      {explanation && (
        <div className={`info-panel ${isInfoExpanded ? 'expanded' : ''}`}>
          <div className="info-button-container" >
            <InfoButton icon={"bi bi-info-circle-fill"} color={"rgb(87, 169, 221)"} onClick={handleInfoClick}/>
          </div>
          <div
            className="d-flex w-100 p-3"
            style={{ overflowY: "auto" }}
          >
            <p dangerouslySetInnerHTML={{ __html: explanation.replace(/\n/g, '<br />') }} />
          </div>
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
                            <p key={index} className="m-0 ms-2 me-2" style={{ color: "black" }}>
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

                    <VerticalTimeline layout="1-column-left" lineColor="black">

                      {results.map((answer, index) =>
                        answer.isAnswer ? (
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work m-0 mb-3"
                            contentStyle={{ background: '#42A938', color: 'white', padding: "10px" }}
                            iconStyle={{ background: 'black', color: 'black', scale: "0.5", }}
                            contentArrowStyle={{ borderRight: '7px solid #42A938' }}
                          >
                            <h5 className="m-0">{answer.answer}</h5>
                          </VerticalTimelineElement>
                        ) : (
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work m-0 mb-3"
                            contentStyle={{ background: '#3D76B3', color: 'white', padding: "10px" }}
                            // iconStyle={{ background: 'black', color: 'black', scale: "0.5" }}
                            iconStyle={answer.hasWon ? winnerIconStyle : basicIconStyle}
                            contentArrowStyle={{ borderRight: '7px solid #3D76B3' }}
                            icon={answer.hasWon ? <TrophyIcon /> : <></> }
                          >
                            <h5 className="m-0 mb-1">{answer.answer}</h5>
                            <div className="d-flex align-items-center">
                              <p className="vertical-timeline-element-title m-0 me-2">{answer.name}</p>
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
                            
                          </VerticalTimelineElement>
                        )
                      )}
                    </VerticalTimeline>
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
                    <ClassificationUserCard
                      image={getImageFromCharacterIndex(playerData.characterIndex)}
                      name={playerData.name}
                      score={playerData.score}
                      isMovedUp={playerData.isMovedUp}
                      isMovedDown={playerData.isMovedDown}
                    />
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
