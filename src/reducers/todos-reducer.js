import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../constants/constants";

const defaultState = {
  todos: [
    {
      id: 0,
      text: "Learn Redux",
      isDone: false
    },
    {
      id: 1,
      text: "I hate Redux",
      isDone: false
    }
  ],
  index: 1
};

export const todosReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        index: state.index + 1,
        todos: [
          ...state.todos,
          {
            id: state.index + 1,
            text: payload.text,
            isDone: false
          }
        ]
      };
    case TOGGLE_TODO:
      console.log("payload:", payload);
      const todo = state.todos.find(x => payload === x.id);
      todo.isDone = !todo.isDone;
      const todos = [...state.todos];
      todos[payload.id] = todo;
      return {
        ...state,
        todos
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(x => x.id !== payload)
      };
    default:
      return state;
  }
};
