import React from "react";
import "./input.styles.css";

const CustomInput = (props) => {
  return (
    <div className="custom-input">
      <input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required
        {...props}
      />
    </div>
  );
};

export default CustomInput;
