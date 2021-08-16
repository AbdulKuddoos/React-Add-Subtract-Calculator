import React from "react";
import "./App.css";

import Background from "./components/Background/background.component.jsx";
import CustomButton from "./components/CustomButton/custom-button.component";
import CustomInput from "./components/CustomInput/input.component.jsx";
// import { connect } from "react-redux";
import {
  sumCalled,
  subtractCalled,
  num1Changed,
  num2Changed,
  resetCalled,
} from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
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

  const num1 = useSelector((state) => state.num1);
  const num2 = useSelector((state) => state.num2);
  const ans = useSelector((state) => state.ans);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Background text="Calculator" />
      <CustomInput
        onChange={(event) => {
          dispatch(num1Changed(event.target.value));
        }}
        name="num1"
        value={num1}
      />
      <CustomInput
        name="num2"
        value={num2}
        onChange={(event) => {
          dispatch(num2Changed(event.target.value));
        }}
      />
      <CustomButton
        onChange={() => {
          dispatch(sumCalled());
        }}
      >
        +
      </CustomButton>
      <CustomButton
        onChange={() => {
          dispatch(subtractCalled());
        }}
      >
        -
      </CustomButton>
      <CustomInput value={ans} readOnly />
      <CustomButton
        onChange={() => {
          dispatch(resetCalled());
        }}
      >
        RESET
      </CustomButton>
    </div>
  );
}

export default App;

//Don't need this with React hooks.
// function mapStateToProps(state) {
//   return {
//     num1: state.num1,
//     num2: state.num2,
//     ans: state.ans,
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     sumCalled: () => {
//       dispatch(sumCalled());
//     },
//     subtractCalled: () => {
//       dispatch(subtractCalled());
//     },
//     resetCalled: () => {
//       dispatch(resetCalled());
//     },
//     num1Changed: (e) => {
//       dispatch(num1Changed(e.target.value));
//     },
//     num2Changed: (e) => {
//       dispatch(num2Changed(e.target.value));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
