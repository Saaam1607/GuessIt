import React, { useState, useEffect } from 'react';

import "./powerSelector.css";

const ghost_icon = require('../assets/images/ghost_icon.png');
const x2_icon = require('../assets/images/x2_icon.png');
const help_icon = require('../assets/images/help_icon.png');
const win_icon = require('../assets/images/win_icon.png');

const circle = require('../assets/images/circle.png');





function PowerSelector({
  ghostIconClicked,
  ghostPowerAvailableBonuses,
  handleGhostIconClick,

  x2IconClicked,
  x2PowerAvailableBonuses,
  handleX2IconClick,

  helpIconClicked,
  helpPowerAvailableBonuses,
  handleHelpIconClick,

  isGhostIconGlowing,
  isHelpIconGlowing,
  isX2IconGlowing,

  setIsGhostIconGlowing,
  setIsHelpIconGlowing,
  setIsX2IconGlowing,
}) {

  console.log(isGhostIconGlowing + " " + isHelpIconGlowing + " " + isX2IconGlowing);

  useEffect(() => {
    if (isGhostIconGlowing == true) {
      setTimeout(() => {
        setIsGhostIconGlowing(false);
      }, 1000);
    }
  }, [isGhostIconGlowing]);

  useEffect(() => {
    if (isHelpIconGlowing == true) {
      setTimeout(() => {
        setIsHelpIconGlowing(false);
      }, 1000);
    }
  }, [isHelpIconGlowing]);

  useEffect(() => {
    if (isX2IconGlowing == true) {
      setTimeout(() => {
        setIsX2IconGlowing(false);
      }, 1000);
    }
  }
, [isX2IconGlowing]);

  return (
    <div className="mt-2 d-flex">

        <div
          className={`ms-1 me-1 ${ghostIconClicked ? 'box' : 'empty-box'}`}
          style={{
            width: "fit-content",
            height: "fit-content",
            borderRadius: "15px",
          }}
        > 
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "#4f4f4f",
            borderRadius: "10px",
            width: "80px",
            height: "50px",
          }}
        >
          <img
            src={ghost_icon}
            alt="Ghost icon"
            className={`m-0 p-0 mx-3 ${isGhostIconGlowing ? 'glow' : ''}`}
            style={{
              width: "33px",
              height: "33px",
              opacity: ghostPowerAvailableBonuses > 0 ? "1" : "0.2",
            }}
            onClick={handleGhostIconClick}
          />
          <div
            className="d-flex flex-column justify-content-center"
            style={{
              width: "50px",
              height: "100%",
            }}
          >
            {Array.from({ length: ghostPowerAvailableBonuses }).map((_, index) => (
              <img
                key={index}
                src={circle}
                alt="Circle"
                style={{
                  width: "8px",
                  height: "8px",
                  margin: "1px",
                }}
              />
            ))}
          </div>
          </div>
        </div>

        <div
          className={`ms-1 me-1 ${helpIconClicked ? 'box' : 'empty-box'}`}
          style={{
            width: "fit-content",
            height: "fit-content",
            borderRadius: "15px",
          }}
        >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "#93d681",
            borderRadius: "10px",
            width: "80px",
            height: "50px",
          }}
        >
          <img
            src={help_icon}
            alt="Help icon"
            className={`m-0 p-0 mx-3 ${isHelpIconGlowing ? 'glow' : ''}`}
            style={{
              width: "33px",
              height: "33px",
              opacity: helpPowerAvailableBonuses > 0 ? "1" : "0.3",
            }}
            onClick={handleHelpIconClick}
          />
          <div
            className="d-flex flex-column justify-content-center"
            style={{
              width: "50px",
              height: "100%",
            }}
          >
            {Array.from({ length: helpPowerAvailableBonuses }).map((_, index) => (
              <img
                key={index}
                src={circle}
                alt="Circle"
                style={{
                  width: "8px",
                  height: "8px",
                  margin: "1px",
                }}
              />
            ))}
          </div>
          </div>
        </div>

        <div
          className={`ms-1 me-1 ${x2IconClicked ? 'box' : 'empty-box'}`}
          style={{
            width: "fit-content",
            height: "fit-content",
            borderRadius: "15px",
          }}
        >
        <div
          className={`d-flex justify-content-center align-items-center  `}
          style={{
            backgroundColor: "#d6c481",
            borderRadius: "10px",
            width: "80px",
            height: "50px",
          }}
        >
          <img
            src={x2_icon}
            alt="X2 icon"
            className={`m-0 p-0 mx-3 ${isX2IconGlowing ? 'glow' : ''}`}
            style={{
              width: "33px",
              height: "33px",
              opacity: x2PowerAvailableBonuses > 0 ? "1" : "0.2",
            }}
            onClick={handleX2IconClick}
          />
          <div
            className="d-flex flex-column justify-content-center"
            style={{
              width: "50px",
              height: "100%",
            }}
          >
            {Array.from({ length: x2PowerAvailableBonuses }).map((_, index) => (
              <img
                key={index}
                src={circle}
                alt="Circle"
                style={{
                  width: "8px",
                  height: "8px",
                  margin: "1px",
                }}
              />
            ))}
          </div>
          </div>
        </div>


    </div>
  );
};

export default PowerSelector;
