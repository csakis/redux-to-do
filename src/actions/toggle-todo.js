import { TOGGLE_TODO } from "../constants/constants";

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id
});
