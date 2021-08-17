import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({ children, onChange }) => (
  <div>
    <button className="custom-button" onClick={onChange}>{children}</button>
  </div>
);

export default CustomButton;
