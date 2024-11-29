import React, { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);
  let [isVisiable, setVisibility] = useState(false);
  const handleIncrementCounter = () => {
    setCounter(10); // but why this logic reflected immediately setCounter(++counter)
    console.log(counter);
    setVisibility(true);
    console.log(isVisiable);
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={handleIncrementCounter}>
        icremet
      </button>
      <div className="txt btn-txt">{counter}</div>
    </div>
  );
};

export default Counter;
