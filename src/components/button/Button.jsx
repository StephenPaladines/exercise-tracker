import React from "react";

const Button = props => {
  return (
    <button
      className="btn btn-primary"
      name={props.name}
      value={props.value}
      onClick={props.handleChange}
    >
      {props.name}
    </button>
  );
};

export default Button;
