import { CHANGE_INPUT } from "../actions/change-input";

const defaultState = {
  input: "hello"
};

export const inputReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: payload
      };
    default:
      return state;
  }
};
