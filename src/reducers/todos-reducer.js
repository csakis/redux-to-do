import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../constants/constants";

const defaultState = {
  todos: [
    {
      id: 0,
      text: "Learn Redux",
      done: false
    }
  ],
  index: 0
};

export const todosReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        index: state.index +1,
        todos: [
          ...state.todos,
          {
            id: payload.id,
            text: payload.text,
            done: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: payload.id,
            text: payload.text,
            done: false
          }
        ]
      };
    case REMOVE_TODO:
      return {
        index: state.index +1,
        todos: [
          ...state.todos,
          {
            id: payload.id,
            text: payload.text,
            done: false
          }
        ]
      };
    default:
      return state;
  }
};
