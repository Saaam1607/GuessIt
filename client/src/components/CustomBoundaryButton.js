import React from 'react';

import "./customFont.css";



function CustomBoundaryButton({ isMin, message, helperUsed, prevMessage, color }) {

    const messageToDisplay = helperUsed ? prevMessage : message;

    return (
        <div className="d-flex flex-column">
            {helperUsed && (
            <p
                className="btn d-flex align-items-center justify-content-center p-0 py-1 mb-1"
                style={{
                    backgroundColor: "gold",
                    color: "black",
                    borderRadius: "10px",
                    fontFamily: "customFont",
                    fontSize: "0.8rem",
                    letterSpacing: "0.05rem",
                    width: "60px",
                    height: '50px',
                    cursor: "default",
                    margin: isMin ? "0 10px 0 0" : "0 0 0 10px",
                }}
            >
                {message}
            </p>
            )}
            <p
                className={`btn d-flex align-items-center justify-content-center p-0 py-2 ${helperUsed ? 'strikethrough margin' : ''}`}
                style={{
                    backgroundColor: color,
                    color: "white",
                    borderTopLeftRadius: isMin ? "10px" : "0px",
                    borderBottomLeftRadius: isMin ? "10px" : "0px",
                    borderTopRightRadius: isMin ? "0px" : "10px",
                    borderBottomRightRadius: isMin ? "0px" : "10px",
                    fontFamily: "customFont",
                    fontSize: "0.8rem",
                    letterSpacing: "0.05rem",
                    width: "60px",
                    height: '50px',
                    cursor: "default",
                    margin: isMin ? "0 0 0 0" : "0 0 0 0",
                    textDecoration: helperUsed ? 'line-through' : "",
                    // opacity: helperUsed ? '0.3' : "1",

                }}
            >
                {messageToDisplay}
            </p>
        </div>
    );

};

export default CustomBoundaryButton;
