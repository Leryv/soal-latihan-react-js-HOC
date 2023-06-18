import React from "react";
import withCalculate from "../utils/withCalculate";

function Counter(props) {
  // console.log("props from button: ", props);
  return (
    <div>
      <h1>x + {props.counter}</h1>
      <p>hasil: {props.count}</p>
      <button onClick={props.handleCount}>tambah</button>
    </div>
  );
}

export default withCalculate(Counter);
