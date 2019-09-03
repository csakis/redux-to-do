export const CHANGE_INPUT = "CHANGE_INPUT";

export const changeInput = text => {

  return {
    type: CHANGE_INPUT,
    payload: text
  };
};
