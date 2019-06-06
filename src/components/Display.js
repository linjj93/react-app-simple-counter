import React from "react";
import "../styles/Display.css";

function Display(props) {
  return <div className={props.className}>{props.count}</div>;
}

export default Display;
