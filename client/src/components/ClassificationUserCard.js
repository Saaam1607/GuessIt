import React from 'react';



function ClassificationUserCard({ image, name, score, isMovedUp, isMovedDown }) {

  return (
    <div
      className="d-flex"
      style={{
        // border: "2px solid black",
        borderRadius: "40px",
        padding: "0px",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <img className="" style={{ minWidth: "40px", minHeight: "40px" }} src={image} alt={image}/>
      <p className="m-0 p-0 mx-3" style={{ color: "black" }}>{score} - {name}</p>
      {isMovedUp && (
        <div className="d-flex justify-content-center align-items-center mx-2" style={{ backgroundColor: "green", width: "20px", height: "20px", borderRadius: "50%"}}>
          <i  className="bi bi-caret-up-fill d-flex justify-content-center align-items-center m-0 p-0" style={{color: "black"}}></i>
        </div>
      )}
      {isMovedDown && (
        <div className="d-flex justify-content-center align-items-center mx-2" style={{ backgroundColor: "red", width: "20px", height: "20px", borderRadius: "50%"}}>
          <i className="bi bi-caret-down-fill d-flex justify-content-center align-items-center m-0 p-0" style={{color: "black"}}></i>
        </div>
      )}
      {!isMovedUp && !isMovedDown && (
        <div className="d-flex justify-content-center align-items-center mx-2" style={{ backgroundColor: "grey", width: "20px", height: "20px", borderRadius: "50%"}}>
          <i className="bi bi-dash d-flex justify-content-center align-items-center m-0 p-0" style={{color: "black"}}></i>
        </div> 
      )}
    </div>
  );

};

export default ClassificationUserCard;
