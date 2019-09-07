import {TOGGLE_TODO} from '../constants/constants'

export const toggleTodo = id => {

  return {
    type: TOGGLE_TODO,
    payload: id
  };
};
