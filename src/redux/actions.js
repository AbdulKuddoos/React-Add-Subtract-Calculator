export function sumCalled() {
  return {
    type: "sumCalled",
  };
}
export function num1Changed(value) {
  return {
    type: "num1Changed",
    payload: { value },
  };
}
export function num2Changed(value) {
  return {
    type: "num2Changed",
    payload: { value },
  };
}

export function subtractCalled() {
  return {
    type: "subtractCalled",
  };
}
