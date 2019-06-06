import React from "react";
import Counter from "./Counter";
// import logo from "../assets/logo.svg";
import "../styles/App.css";

function App() {
  const counters = [
    { id: "0", initialCount: 0 },
    { id: "1", initialCount: -2 },
    { id: "2", initialCount: 7 },
    { id: "3", initialCount: 5 },
    { id: "4", initialCount: -10 }
  ];

  const counterItems = counters.map(counter => {
    return <Counter key={counter.id} count={counter.initialCount} />;
  });

  // return (
  //   <React.Fragment>
  //     {
  //       // index can be used only if array is not pushed or popped
  //     }
  //     {count.map((num, index) => {
  //       return <Counter key={index} num={num} />;
  //     })}
  //   </React.Fragment>
  // );
  return <React.Fragment>{counterItems}</React.Fragment>;
}

export default App;
