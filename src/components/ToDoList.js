import React from "react";
import ToDo from "./ToDo";
import { toggleTodo } from "../actions/toggle-todo";
import { removeTodo } from "../actions/remove-todo";
import { connect } from "react-redux";
import { List } from "@material-ui/core";

export const ToDoList = (props)=> {
    const list = props.todos.map(x => (
      <ToDo
        key={x.id}
        isDone={x.isDone}
        id={x.id}
        onClickTodo={props.onToggleTodo}
        onClickRemove={props.onRemoveTodo}

      >
        {x.text}
      </ToDo>
    ));
    return <List>{list}</List>;
  }


const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  };
};
const mapActionsToProps = dispatch => {
  return {
    onToggleTodo: id => {
      dispatch(toggleTodo(id));
    },
    onRemoveTodo: id => {
      dispatch(removeTodo(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ToDoList);
