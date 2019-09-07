import { CHANGE_INPUT } from "../constants/constants";

export const changeInput = text => ({
  type: CHANGE_INPUT,
  payload: text
});
