import { REMOVE_TODO } from "../constants/constants";

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: id
});
