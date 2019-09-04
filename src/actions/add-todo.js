import {ADD_TODO} from '../constants/constants'
export const addTodo = ({ id, text }) => {
  return {
    type: ADD_TODO,
    payload: {
      id,
      text
    }
  };
};
