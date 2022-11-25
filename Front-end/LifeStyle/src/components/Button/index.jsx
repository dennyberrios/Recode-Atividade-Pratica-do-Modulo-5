import React from "react";
import * as C from "./styles";

const Button = ({ value, onClick, Type = "button" }) => {
  return (
    <C.Button type={Type} onClick={onClick}>
      {value}
    </C.Button>
  );
};

export default Button;
