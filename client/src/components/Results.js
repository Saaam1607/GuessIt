import React from 'react';

const ghost_icon = require('../assets/images/ghost_icon.png');
const x2_icon = require('../assets/images/x2_icon.png');
const help_icon = require('../assets/images/help_icon.png');
const win_icon = require('../assets/images/win_icon.png');



function Results({results}) {
  
  return (
    <div>
    <h3
      style={{
        fontFamily: "customFont",
        fontSize: "2rem",
        letterSpacing: "0.1rem",
      }}
    >Risultati</h3>
    
    <div
      className={"m-1 d-flex flex-column flex-align-items-center justify-content-center"}
      // style={{height: "40px"}}
    >
      {results.map((playerAnswerData, index) => (
        playerAnswerData.isAnswer ? (
          <p
            className="p-0 m-0"
            style={{
              fontFamily: "customFont",
              fontSize: "1.4rem",
              letterSpacing: "0.1rem",
              color: "green"
            }}
          >{playerAnswerData.answer} - RISPOSTA CORRETTA</p>
        ) : (
          <div key={index} className="d-flex" >
            <p
              className="p-0 m-0"
              style={{
                fontFamily: "customFont",
                fontSize: "1.4rem",
                letterSpacing: "0.1rem",
              }}
            >{playerAnswerData.answer} - {playerAnswerData.name}</p>

            <div className="mx-2 d-flex align-items-center">
              {playerAnswerData.hasUsedX2 && (
                <img
                  src={x2_icon}
                  alt="X2 icon"
                  className={`m-0 p-0`}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                />
              )}

              {playerAnswerData.hasUsedHelp && (
                <img
                  src={help_icon}
                  alt="help icon"
                  className={`m-0 p-0`}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                />
              )}

              {playerAnswerData.hasUsedGhost && (
                <img
                  src={ghost_icon}
                  alt="ghost icon"
                  className={`m-0 p-0`}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                />
              )}

              {playerAnswerData.hasWon && (
                <div className="image-container">
                  <img
                    src={win_icon}
                    alt="win icon"
                    className={`m-0 p-0 ms-3`}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              )}
            </div>
            
          </div>

        )

      ))}
    </div>
  </div>
  );
};

export default Results;
