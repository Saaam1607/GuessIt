import React, { useState, useEffect } from 'react';
import logoImage from '../assets/images/logo.png';
import logoImage2 from '../assets/images/logo2.png';
import logoImage3 from '../assets/images/logo3.png';


function Title() {

  const [currentImage, setCurrentImage] = useState(logoImage);
  const imageSequence = [logoImage2, logoImage3, logoImage2, logoImage3, logoImage2, logoImage]; 

  const [intervalTime, setIntervalTime] = useState(5000);



  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % imageSequence.length;
      setCurrentImage(imageSequence[index]);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [intervalTime]);

  useEffect(() => {
    if (currentImage === logoImage) {
      setIntervalTime(5000);
    } else {
      setIntervalTime(100);
    }
  }, [currentImage]);



  return (
    <div className={"container-fluid d-flex flex-column align-items-center"} style={{ position: "relative" }}>
    <img
      src={currentImage}
      alt="logo"
      className={"my-2"}
      style={{ width: "55%", maxWidth: "250px", display: "block" }}
    />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#489bd4",
          mixBlendMode: "color",
        }}
      />
  </div>
  );
};

export default Title;
