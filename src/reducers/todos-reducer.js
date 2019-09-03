import { ADD_TODO } from "../actions/add-todo";

const defaultState = {
  todos: [
    {
      id: 1,
      text: "Learn Redux",
      done: false
    }
  ],
  index: 0
};

export const todosReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      console.log("state", state);
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
