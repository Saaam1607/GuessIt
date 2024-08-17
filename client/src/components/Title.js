import React from 'react';
import logoImage from '../assets/images/logo.png';

function Title() {
  return (
    <div className={"container-fluid d-flex flex-column align-items-center"}>
    <img
      src={logoImage}
      alt="logo"
      className={"my-2"}
      style={{ width: "40%", maxWidth: "300px" }}
    />
  </div>
  );
};

export default Title;
