import React from 'react';

function Classification({ classificationData }) {
  return (
    <div>
      <h3
        style={{
          fontFamily: "customFont",
          fontSize: "2rem",
          letterSpacing: "0.1rem",
        }}
      >
        Classifica
      </h3>
      {classificationData.map((playerData, index) => (
        playerData?.active && playerData.name ? (
          <div
            key={index}
            className="d-flex align-items-center m-1"
          >
            <p
              className="p-0 m-0"
              style={{
                fontFamily: "customFont",
                fontSize: "1.4rem",
                letterSpacing: "0.1rem",
              }}
            >
              {playerData.name} : {playerData.score}
            </p>
            {playerData?.isMovedUp && (
              <i style={{color: "green"}} className="bi bi-caret-up-fill ms-2"></i>
            )}
            {playerData?.isMovedDown && (
              <i style={{color: "red"}} className="bi bi-caret-down-fill ms-2"></i>
            )}
          </div>
        ) : null
      ))}
    </div>
  );
};

export default Classification;
