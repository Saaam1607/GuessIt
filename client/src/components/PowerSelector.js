import React, { useState, useEffect } from 'react';

import "./powerSelector.css";

import Power from './Power';

const ghost_icon = require('../assets/images/ghost_icon.png');
const x2_icon = require('../assets/images/x2_icon.png');
const help_icon = require('../assets/images/help_icon.png');
const win_icon = require('../assets/images/win_icon.png');

const circle = require('../assets/images/circle.png');



function PowerSelector({
  ghostIconClicked, ghostPowerAvailableBonuses, handleGhostIconClick,
  x2IconClicked, x2PowerAvailableBonuses, handleX2IconClick,
  helpIconClicked, helpPowerAvailableBonuses, handleHelpIconClick,
  isGhostIconGlowing, isHelpIconGlowing, isX2IconGlowing,
  setIsGhostIconGlowing, setIsHelpIconGlowing, setIsX2IconGlowing,
}) {

  return (
    <div className="d-flex flex-column justify-content-around">
      <Power
        powerAvailableBonuses={ghostPowerAvailableBonuses}
        isIconClicked={ghostIconClicked}
        handleIconClick={handleGhostIconClick}
        isIconGlowing={isGhostIconGlowing}
        setIsIconGlowing={setIsGhostIconGlowing}
        backgroundColor="#4f4f4f" image={ghost_icon}
      />
      <Power
        powerAvailableBonuses={helpPowerAvailableBonuses}
        isIconClicked={helpIconClicked}
        handleIconClick={handleHelpIconClick}
        isIconGlowing={isHelpIconGlowing}
        setIsIconGlowing={setIsHelpIconGlowing}
        backgroundColor="#93d681" image={help_icon}
      />
      <Power
        powerAvailableBonuses={x2PowerAvailableBonuses}
        isIconClicked={x2IconClicked}
        handleIconClick={handleX2IconClick}
        isIconGlowing={isX2IconGlowing}
        setIsIconGlowing={setIsX2IconGlowing}
        backgroundColor="#d6c481" image={x2_icon}
      />
    </div>
  );
};

export default PowerSelector;
