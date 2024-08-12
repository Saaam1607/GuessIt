import React, {useState} from 'react';

import "./characterPicker.css";

const jack = require('../assets/images/jack.png');
const giorgio = require('../assets/images/giorgio.png');
const yusuf = require('../assets/images/yusuf.png');
const roccia = require('../assets/images/roccia.png');

const ghost_icon = require('../assets/images/ghost_icon.png');
const x2_icon = require('../assets/images/x2_icon.png');
const help_icon = require('../assets/images/help_icon.png');




function CharacterPicker({ }) {

  const [characterIndex, setCharacterIndex] = useState(0);

  const characters = [
    {
      name: "Jack",
      image: jack,
      ghost: 4,
      x2: 2,
      help: 0,
    },
    {
      name: "Giorgio",
      image: giorgio,
      ghost: 1,
      x2: 4,
      help: 1,
    },
    {
      name: "Yusuf",
      image: yusuf,
      ghost: 0,
      x2: 2,
      help: 4,
    },
    {
      name: "Roccia",
      image: roccia,
      ghost: 2,
      x2: 2,
      help: 2,
    },
  ]

  function handleRightArrow() {
    if (characterIndex === characters.length - 1) {
      setCharacterIndex(0);
    } else {
      setCharacterIndex(characterIndex + 1);
    }
  }

  function handleLeftArrow() {
    if (characterIndex === 0) {
      setCharacterIndex(characters.length - 1);
    } else {
      setCharacterIndex(characterIndex - 1);
    }
  }

  return (
    <div className={`d-flex align-items-center`}>
      
      
      <div class="d-flex flex-column justify-content-center align-items-center">

        <div className="d-flex align-items-center">
          <i class="bi bi-arrow-left-circle-fill arrow" onClick={handleLeftArrow}></i>
          <img
            src={characters[characterIndex].image}
            alt={characters[characterIndex].name}
            className={`m-0 p-0 character-selector`}
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
            }}
          />
          <i class="bi bi-arrow-right-circle-fill arrow" onClick={handleRightArrow}></i>
        </div>
        
        <div
          className="d-flex justify-content-around mt-2"        
          style={{  width: "60%" }}
        >
          
          <div className="d-flex flex-column align-items-center">
            <img
              src={ghost_icon}
              alt={ghost_icon}
              className={`m-0 p-0`}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            />
            <p>x {characters[characterIndex].ghost}</p>
          </div>

          <div className="d-flex flex-column align-items-center">
            <img
              src={x2_icon}
              alt={x2_icon}
              className={`m-0 p-0`}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            />
            <p>x {characters[characterIndex].x2}</p>
            </div>

          <div className="d-flex flex-column align-items-center">
            <img
              src={help_icon}
              alt={help_icon}
              className={`m-0 p-0`}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            />
            <p>x {characters[characterIndex].help}</p>
            </div>

        </div>
      </div>
    
    </div>
  );

};

export default CharacterPicker;
