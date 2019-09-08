import React from "react";
import ToDo from "./ToDo";
import { toggleTodo } from "../actions/toggle-todo";
import { connect } from "react-redux";

export const ToDoList = props => {
  const list = props.todos.map(x => (
    <ToDo
      key={x.id}
      isDone={x.isDone}
      id={x.id}
      onClickTodo={props.onToggleTodo}
    >
      {x.text}
    </ToDo>
  ));
  return <React.Fragment>{list}</React.Fragment>;
};

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  };
};
const mapActionsToProps = dispatch => ({
  onToggleTodo: id => {
    dispatch(toggleTodo(id));
  }
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ToDoList);
