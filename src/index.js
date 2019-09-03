import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware } from "redux";
import { todosReducer } from "./reducers/todos-reducer";
import { inputReducer } from "./reducers/input-reducer";
import {addTodo} from './actions/add-todo'

import { Provider } from "react-redux";

const allReducers = combineReducers({
  todos: todosReducer,
  input: inputReducer
});
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(addTodo({
    id:2,
    text: "hello"
}))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
