import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { combineReducers, createStore } from "redux";
import { todosReducer } from "./reducers/todos-reducer";
import { inputReducer } from "./reducers/input-reducer";

import { Provider } from "react-redux";

const allReducers = combineReducers({
  todos: todosReducer,
  input: inputReducer
});
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
