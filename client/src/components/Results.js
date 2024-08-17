import React from 'react';

import "./results.css";

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
    
    <div className={"m-1 d-flex flex-column flex-align-items-center justify-content-center"} >
      <table className="table" >
        <tbody
          className="table-body"
          style={{
            fontFamily: "customFont",
            fontSize: "1.4rem",
            letterSpacing: "0.15rem",
          }}
        >
          {results.map((playerAnswerData, index) => (
            playerAnswerData.isAnswer ? (
              <tr key={index}>
                <td style={{color: "green"}}>{playerAnswerData.answer}</td>
                <td style={{color: "green"}}>RISPOSTA CORRETTA</td>
                <td></td>
              </tr>
            ) : (
              <tr key={index}>
                <td>{playerAnswerData.answer}</td>
                <td>{playerAnswerData.name}</td>
                <td>
                  <div className="mx-2 d-flex align-items-center" style={{width: "100%", height: "100%"}}>
                    {playerAnswerData.hasUsedX2 && (
                      <img
                        src={x2_icon}
                        alt="X2 icon"
                        className={`m-0 p-0`}
                        style={{
                          width: "25px",
                          height: "25px",
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
                          width: "25px",
                          height: "25px",
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
                          width: "25px",
                          height: "25px",
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
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>

    </div>
  </div>
  );
};

export default Results;
