import React from "react";

let counter = 0;

const StrictModeTest = () => {
  console.log(counter); // This is side effects
  counter++; // This is side effects
  return (
    <div>
      <button type="button" className="btn btn-primary">
        Counter <span className="badge bg-warning"> {counter}</span>
      </button>
    </div>
  );
};

export default StrictModeTest;
