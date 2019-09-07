import { ADD_TODO } from "../constants/constants";
export const addTodo = ({ id, text }) => ({
  type: ADD_TODO,
  payload: {
    id,
    text
  }
});
