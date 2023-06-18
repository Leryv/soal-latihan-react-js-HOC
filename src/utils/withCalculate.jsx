import React, { useState } from "react";

const withCalculate = (OriginalComponent) => {
  return (props) => {
    // console.log("Dari WithCalculate : ", props.counter);
    const [count, setCounter] = useState(0);

    const handleCount = () => {
      setCounter(count + props.counter);
    };

    return (
      <OriginalComponent
        // counter={props.counter}
        count={count}
        handleCount={handleCount}
        {...props}
      />
    );
  };
};
export default withCalculate;
