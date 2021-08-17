import React from "react";
import "./background.styles.css";

class Background extends React.Component {
  render() {
    return (
      <div className="background">
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default Background;
