import {REMOVE_TODO} from '../constants/constants'

export const removeTodo = id => {

  return {
    type: REMOVE_TODO,
    payload: id
  };
};
