import * as actions from "./actionTypes";

export function sumCalled() {
  return {
    type: actions.sumCalled,
  };
}
export function num1Changed(value) {
  return {
    type: actions.setNum1Value,
    payload: { value },
  };
}
export function num2Changed(value) {
  return {
    type: actions.setNum2Value,
    payload: { value },
  };
}

export function subtractCalled() {
  return {
    type: actions.subtractCalled,
  };
}
