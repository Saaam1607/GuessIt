import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import "./characterPicker.css";

const socketUrl = process.env.REACT_APP_SOCKET_URL || "https://guessitserver.onrender.com";
const socket = io.connect(socketUrl);



const jack = require('../assets/images/jack.png');
const giorgio = require('../assets/images/giorgio.png');
const yusuf = require('../assets/images/yusuf.png');
const roccia = require('../assets/images/roccia.png');

const ghost_icon = require('../assets/images/ghost_icon.png');
const x2_icon = require('../assets/images/x2_icon.png');
const help_icon = require('../assets/images/help_icon.png');

const SoundManager = require('../components/SoundManager.js');



function CharacterPicker({ characterIndex, setCharacterIndex }) {

  const [characters, setCharacters] = useState([]);

  function getImageFromId(id) {
    switch (id) {
      case 0:
        return jack;
      case 1:
        return giorgio;
      case 2:
        return yusuf;
      case 3:
        return roccia;
    }
  }

  useEffect(() => {

    socket.emit("characters", { });

    function handleCharacters(data) {
      console.log(data);
      setCharacters(data.characters);
    }

    socket.on("characters", handleCharacters);
  
    return () => {
      socket.off("characters", handleCharacters);
    };

  }, [socket]);



  function handleRightArrow() {
    if (characterIndex === characters.length - 1) {
      setCharacterIndex(0);
    } else {
      setCharacterIndex(characterIndex + 1);
    }
    SoundManager.playMenuSwoosh();
  }

  function handleLeftArrow() {
    if (characterIndex === 0) {
      setCharacterIndex(characters.length - 1);
    } else {
      setCharacterIndex(characterIndex - 1);
    }
    SoundManager.playMenuSwoosh();
  }

  return (
    <div className={`d-flex align-items-center`}>
      
      
      <div className="d-flex flex-column justify-content-center align-items-center">

        <div className="d-flex align-items-center">
          <i className="bi bi-arrow-left-circle-fill arrow" onClick={handleLeftArrow}></i>
          <img
            src={getImageFromId(characterIndex)}
            alt={characters[characterIndex]?.name}
            className={`m-0 p-0 character-selector`}
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
            }}
          />
          <i className="bi bi-arrow-right-circle-fill arrow" onClick={handleRightArrow}></i>
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
            <p>x {characters[characterIndex]?.ghostPowers}</p>
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
            <p>x {characters[characterIndex]?.x2Powers}</p>
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
            <p>x {characters[characterIndex]?.helpPowers}</p>
            </div>

        </div>
      </div>
    
    </div>
  );

};

export default CharacterPicker;
