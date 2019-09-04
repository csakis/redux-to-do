import { CHANGE_INPUT } from "../constants/constants";

const defaultState = {
  input: ""
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
