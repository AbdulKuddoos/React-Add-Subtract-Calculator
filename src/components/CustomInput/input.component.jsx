import React from "react";
import "./input.styles.css";

const CustomInput = ({ value, name, onChange }) => {
  return (
    <span>
      <input name={name} value={value} onChange={onChange} required />
    </span>
  );
};

export default CustomInput;
