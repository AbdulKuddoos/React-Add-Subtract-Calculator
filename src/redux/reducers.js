const INITIAL_STATE = {
  num1: "0",
  num2: "0",
  ans: "0",
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  const { num1, num2 } = state;
  switch (type) {
    case "num1Changed":
      return { ...state, num1: payload.value };

    case "num2Changed":
      return { ...state, num2: payload.value };
    case "sumCalled":
      return {
        ...state,
        ans: parseFloat(num1) + parseFloat(num2),
      };
    case "subtractCalled":
      return {
        ...state,
        ans: parseFloat(num1) - parseFloat(num2),
      };
    default:
      return state;
  }
}
