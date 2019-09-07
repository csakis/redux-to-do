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
            id: state.index +1,
            text: payload.text,
            isDone: false
          }
        ]
      };
    case TOGGLE_TODO:
      const todo = state.todos.find(x => payload === x.id);
      console.log(todo)
      todo.isDone = !todo.isDone;
      const todos = [...state.todos];
      todos[payload.id] = todo;
      return {
        todos
      };
    case REMOVE_TODO:
      return {
        index: state.index + 1,
        todos: [
          ...state.todos,
          {
            id: payload.id,
            text: payload.text,
            isDone: false
          }
        ]
      };
    default:
      return state;
  }
};
