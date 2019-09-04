import {CHANGE_INPUT} from '../constants/constants'

export const changeInput = text => {

  return {
    type: CHANGE_INPUT,
    payload: text
  };
};
