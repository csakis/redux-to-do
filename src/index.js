import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware } from "redux";

import { Provider } from "react-redux";

const defaultState = {
  todos: [
    {
      id: 1,
      text: "Learn Redux",
      done: false
    }
  ]
};

const todosReducer = (state=defaultState, action) => {
  console.log(state);
  return state;
};

const allReducers = combineReducers({
  todos: todosReducer
});
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
