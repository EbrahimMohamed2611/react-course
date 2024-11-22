import React from "react";

interface ButtonPrpos {
  onClick: () => void;
  color: string;
  children: string;
}

const Button = ({ onClick, color, children }: ButtonPrpos) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
