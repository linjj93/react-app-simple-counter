import React from "react";
import "../styles/Button.css";

function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.sign}
    </button>
  );
}

export default Button;
