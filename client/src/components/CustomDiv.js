import React from 'react';

import "./customFont.css";
import "./customInput.css";



function CustomDiv({ children }) {

  return (
    <div
      className="mt-2 mb-2"
    >
      {children}
    </div>
  );

};

export default CustomDiv;
