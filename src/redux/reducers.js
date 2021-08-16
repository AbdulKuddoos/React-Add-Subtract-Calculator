import * as actions from "./actionTypes";
const INITIAL_STATE = {
  num1: "0",
  num2: "0",
  ans: "0",
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  const { num1, num2 } = state;
  switch (type) {
    case actions.setNum1Value:
      return { ...state, num1: payload.value };

    case actions.setNum2Value:
      return { ...state, num2: payload.value };
    case actions.sumCalled:
      return {
        ...state,
        ans: parseFloat(num1) + parseFloat(num2),
      };
    case actions.subtractCalled:
      return {
        ...state,
        ans: parseFloat(num1) - parseFloat(num2),
      };
    case actions.resetCalled:
      return {
        ...state,
        num1: "0",
        num2: "0",
        ans: "0",
      };
    default:
      return state;
  }
}
