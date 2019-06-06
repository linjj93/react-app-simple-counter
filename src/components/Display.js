import React from "react";

function Display(props) {
  return <div className={props.className}>{props.count}</div>;
}

export default Display;
