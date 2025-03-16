import React from 'react';



function InfoButton({ icon, color, onClick }) {
  return (
    <div
      className="btn d-flex align-items-center justify-content-center m-0 p-0"
      style={{
        backgroundColor: color,
        color: "white",
        borderRadius: "50%",
        fontSize: "1.5rem",
        minWidth: "40px",
        minHeight: "40px",
      }}
      onClick={onClick}
    >
      <i className={`${icon} d-flex align-items-center justify-content-center m-0 p-0`}></i>
    </div>
  );
};

export default InfoButton;
