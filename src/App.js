import React from "react";
import "./App.css";

import Background from "./components/Background/background.component.jsx";
import CustomButton from "./components/CustomButton/custom-button.component";
import CustomInput from "./components/CustomInput/input.component.jsx";
import { connect } from "react-redux";
import {
  sumCalled,
  subtractCalled,
  num1Changed,
  num2Changed,
} from "./redux/actions";

class App extends React.Component {
  //No need of this material now because of redux
  // constructor() {
  //   super();
  //   this.state = {
  //     num1: 0,
  //     num2: 0,
  //     ans: 0,
  //   };
  // }

  // handleChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // };

  // handleAdd = (event) => {
  //   this.setState({
  //     ans: parseFloat(this.state.num1) + parseFloat(this.state.num2),
  //   });
  // };

  // handleSubtract = (event) => {
  //   this.setState({
  //     ans: parseFloat(this.state.num1) - parseFloat(this.state.num2),
  //   });
  // };

  render() {
    return (
      <div className="App">
        <Background text="Calculator" />
        <CustomInput
          onChange={this.props.num1Changed}
          name="num1"
          value={this.props.num1}
        />
        <CustomInput
          name="num2"
          value={this.props.num2}
          onChange={this.props.num2Changed}
        />
        <CustomButton onChange={this.props.sumCalled}>+</CustomButton>
        <CustomButton onChange={this.props.subtractCalled}>-</CustomButton>
        <CustomInput
          value={this.props.ans}
          onChange={this.props.num1Changed}
          readOnly
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    num1: state.num1,
    num2: state.num2,
    ans: state.ans,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    sumCalled: () => {
      dispatch(sumCalled());
    },
    subtractCalled: () => {
      dispatch(subtractCalled());
    },
    num1Changed: (e) => {
      dispatch(num1Changed(e.target.value));
    },
    num2Changed: (e) => {
      dispatch(num2Changed(e.target.value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
