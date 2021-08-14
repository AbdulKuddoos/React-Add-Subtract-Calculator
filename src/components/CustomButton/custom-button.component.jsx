import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({ children, onChange }) => (
  <span>
    <button onClick={onChange}>{children}</button>
  </span>
);

export default CustomButton;
