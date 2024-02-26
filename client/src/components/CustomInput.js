import React from 'react';

import "./customFont.css";
import "./customInput.css";



function CustomInput({ textLabel, value, setValue, setShowError, placeholder }) {

  return (
    <>
      <label
        htmlFor="gameCode"
        className="form-label m-0"
        style={{
          fontFamily: "customFont",
          fontSize: "1.3rem",
          letterSpacing: "0.1rem",
          color: "rgb(112,128,144)",
          width: "100%",
          textAlign: "center",

        }}
      >
        {textLabel}
      </label>
      <input
        type="string"
        className="form-control ps-5 pe-5 custom-input"
        placeholder={placeholder}
        style={{
          borderRadius: "10px",
          fontFamily: "customFont",
          fontSize: "1.5rem",
          letterSpacing: "0.1rem",
          textAlign: "center",
        }}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          setShowError(false)
        }}
      />
    </>
  );

};

export default CustomInput;
