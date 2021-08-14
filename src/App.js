import React from "react";
import "./App.css";

import Background from "./components/Background/background.component.jsx";
import CustomButton from "./components/CustomButton/custom-button.component";
import CustomInput from "./components/CustomInput/input.component.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      ans: 0,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAdd = (event) => {
    this.setState({
      ans: parseFloat(this.state.num1) + parseFloat(this.state.num2),
    });
  };

  handleSubtract = (event) => {
    this.setState({
      ans: parseFloat(this.state.num1) - parseFloat(this.state.num2),
    });
  };

  render() {
    return (
      <div className="App">
        <Background text="Calculator" />
        <CustomInput
          onChange={this.handleChange}
          name="num1"
          value={this.state.num1}
        />
        <CustomInput
          name="num2"
          value={this.state.num2}
          onChange={this.handleChange}
        />
        <CustomButton onChange={this.handleAdd}>+</CustomButton>
        <CustomButton onChange={this.handleSubtract}>-</CustomButton>
        <CustomInput
          value={this.state.ans}
          onChange={this.handleChange}
          readOnly
        />
      </div>
    );
  }
}

export default App;
