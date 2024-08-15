import React from 'react';



function ControllerButton({ icon, color, onClick }) {
  return (
    <div
      className="btn px-4 py-3 d-flex"
      style={{
        backgroundColor: color,
        color: "white",
        borderRadius: "10px",
        fontFamily: "customFont",
        fontSize: "2.5rem",
      }}
      onClick={onClick}
    >
      <i className={`${icon} d-flex align-items-center justify-content-center m-0 p-0`}></i>
    </div>
  );
};

export default ControllerButton;
