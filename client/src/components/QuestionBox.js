import React from 'react';

import PowerSelector from './PowerSelector';

import './questionBox.css';

function QuestionBox({
  question, image, showImage, hasAnswered,

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
  let imagePath;
  if (image && typeof image === 'string' && image.trim() !== '') {
    try {
      imagePath = require(`../assets/images/questionImages/${image}.png`);
    } catch (error) {
      console.error("Image not found:", error);
    }
  }

  return (
    <div className="question-box" >
      <div className="upper">
        {showImage && imagePath && <img className="question-image" src={imagePath} alt="question" />}
        { showImage && (
          <PowerSelector
            ghostIconClicked={ghostIconClicked} ghostPowerAvailableBonuses={ghostPowerAvailableBonuses} handleGhostIconClick={handleGhostIconClick}
            x2IconClicked={x2IconClicked} x2PowerAvailableBonuses={x2PowerAvailableBonuses} handleX2IconClick={handleX2IconClick}
            helpIconClicked={helpIconClicked} helpPowerAvailableBonuses={helpPowerAvailableBonuses} handleHelpIconClick={handleHelpIconClick}
            isGhostIconGlowing={isGhostIconGlowing} isHelpIconGlowing={isHelpIconGlowing} isX2IconGlowing={isX2IconGlowing}
            setIsGhostIconGlowing={setIsGhostIconGlowing} setIsHelpIconGlowing={setIsHelpIconGlowing} setIsX2IconGlowing={setIsX2IconGlowing}
          />
        )}
      </div>
      <h1 className="question-text lead">{question}</h1>
    </div>
  );
}

export default QuestionBox;
