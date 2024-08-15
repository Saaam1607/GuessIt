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
            className="m-1"
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
          </div>
        ) : null
      ))}
    </div>
  );
};

export default Classification;
