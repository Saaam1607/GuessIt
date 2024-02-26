import React from 'react';

import "./customFont.css";
import "./customInput.css";



function CustomDiv({ children }) {

  return (
    <div
      className="mt-3 mb-3"
    >
      {children}
    </div>
  );

};

export default CustomDiv;
