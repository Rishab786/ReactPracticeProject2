import React, { useState } from "react";

import "./Button.css";

const Button = (props) => {
  const [initColor, setColor] = useState("blue");
  const changeColor = () => {
    props.onClick().trim() === "" ? setColor("red") : setColor("blue");
  };

  return (
    <button
      style={{ backgroundColor: initColor }}
      type={props.type}
      className="button"
      onClick={changeColor}
    >
      {props.children}
    </button>
  );
};

export default Button;
