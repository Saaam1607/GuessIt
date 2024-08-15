import React from 'react';

const ghost_icon = require('../assets/images/ghost_icon.png');
const x2_icon = require('../assets/images/x2_icon.png');
const help_icon = require('../assets/images/help_icon.png');
const win_icon = require('../assets/images/win_icon.png');



function PowerSelector({
  ghostIconClicked,
  ghostPowerAvailableBonuses,
  handleGhostIconClick,

  x2IconClicked,
  x2PowerAvailableBonuses,
  handleX2IconClick,

  helpIconClicked,
  helpPowerAvailableBonuses,
  handleHelpIconClick
}) {
  return (
    <div className="mt-5 d-flex">
                
      <div className="d-flex flex-column align-items-center">
        <img
          src={ghost_icon}
          alt="Ghost icon"
          className={`m-0 p-0 mx-3 ${ghostIconClicked ? 'box' : ''}`}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            opacity: ghostPowerAvailableBonuses > 0 ? "1" : "0.2",
          }}
          onClick={handleGhostIconClick}
        />
        <p style={{fontSize: "1.2em"}}>x {ghostPowerAvailableBonuses}</p>
      </div>

      <div className="d-flex flex-column align-items-center">
        <img
          src={help_icon}
          alt="Help icon"
          className={`m-0 p-0 mx-3 ${helpIconClicked ? 'box' : ''}`}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            opacity: helpPowerAvailableBonuses > 0 ? "1" : "0.2",
          }}
          onClick={handleHelpIconClick}
        />
        <p style={{fontSize: "1.2em"}}>x {helpPowerAvailableBonuses}</p>
      </div>

      <div className="d-flex flex-column align-items-center">
        <img
          src={x2_icon}
          alt="X2 icon"
          className={`m-0 p-0 mx-3 ${x2IconClicked ? 'box' : ''}`}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            opacity: x2PowerAvailableBonuses > 0 ? "1" : "0.2",
          }}
          onClick={handleX2IconClick}
        />
        <p style={{fontSize: "1.2em"}}>x {x2PowerAvailableBonuses}</p>
      </div>

    </div>
  );
};

export default PowerSelector;
