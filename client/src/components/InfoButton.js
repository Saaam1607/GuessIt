import React from 'react';

import './infoButton.css';



function InfoButton({ icon, color, onClick }) {
  return (
    <div
      className=" btn d-flex align-items-center justify-content-center m-0 p-0"
      style={{
        backgroundColor: color,
        color: "white",
        borderRadius: "50%",
        fontSize: "1.5rem",
        minWidth: "75px",
        minHeight: "75px",
      }}
      onClick={onClick}
    >
      <i className={`${icon} d-flex align-items-center justify-content-center m-0 p-0 info-button`} style={{fontSize: "40px"}}/>
    </div>
  );
};

export default InfoButton;
