import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import { resetLastBonusIndex } from "../redux/actions/bonusDataActions.js";

import Power from './Power';

import "./powerSelector.css";


const ghost_icon = require('../assets/images/ghost_icon.png');
const x2_icon = require('../assets/images/x2_icon.png');
const help_icon = require('../assets/images/help_icon.png');
const win_icon = require('../assets/images/win_icon.png');

const circle = require('../assets/images/circle.png');



function PowerSelector({
  handleGhostIconClick, handleX2IconClick, handleHelpIconClick,
}) {

  const answerData = useSelector(state => state.answerData);
  const bonusData = useSelector(state => state.bonusData);

  const [iconGlowingIndex, setIconGlowingIndex] = useState(-1);

  useEffect(() => {
    setIconGlowingIndex(bonusData.lastBonusAddedIndex);
  }, [bonusData]);

  useEffect(() => {
    if (iconGlowingIndex != -1) {
      setTimeout(() => {
        setIconGlowingIndex(-1);
      }, 750);
    }
  }, [iconGlowingIndex]);



  return (
    <div className="d-flex flex-column justify-content-around">
      <Power
        powerAvailableBonuses={bonusData.ghostBonusesAvailable}
        isIconClicked={answerData.ghostBonusUsed}
        handleIconClick={handleGhostIconClick}
        isIconGlowing={iconGlowingIndex == 0}
        backgroundColor="#4f4f4f" image={ghost_icon}
      />
      <Power
        powerAvailableBonuses={bonusData.helpBonusesAvailable}
        isIconClicked={answerData.helpBonusUsed}
        handleIconClick={handleHelpIconClick}
        isIconGlowing={iconGlowingIndex == 1}
        backgroundColor="#93d681" image={help_icon}
      />
      <Power
        powerAvailableBonuses={bonusData.x2BonusesAvailable}
        isIconClicked={answerData.x2BonusUsed}
        handleIconClick={handleX2IconClick}
        isIconGlowing={iconGlowingIndex == 2}
        backgroundColor="#d6c481" image={x2_icon}
      />
    </div>
  );
};

export default PowerSelector;
