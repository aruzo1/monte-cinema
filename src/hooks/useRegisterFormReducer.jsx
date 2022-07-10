import { useReducer } from "react";

const initalState = {
  step: 0,
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  dayOfBirth: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "SET_VALUE":
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
}

function useRegisterFormReducer() {
  return useReducer(reducer, initalState);
}

export default useRegisterFormReducer;
