import React, { useState, useEffect } from 'react';

import "./power.css";

const circle = require('../assets/images/circle.png');

function Power({
  powerAvailableBonuses,
  isIconClicked, handleIconClick,
  isIconGlowing,
  backgroundColor, image,
}) {



  return (
      <div className={`power-container ${isIconClicked ? 'box' : 'empty-box'} ${isIconGlowing ? 'glow' : ''}`} style={{ backgroundColor: `${backgroundColor}` }}  >
        <div className="inner">
          
          <img src={image} alt={`${image} icon`} onClick={handleIconClick}
            className={` ${powerAvailableBonuses > 0 ? '' : 'unavailable'}`}
          />

          <div className="power-indicators-container" >
            {Array.from({ length: powerAvailableBonuses }).map((_, index) => (
              <img key={index} src={circle} alt="Circle" />
            ))}
          </div>
          
      </div>
    </div>
  );
};

export default Power;
