import React from "react";
import { toggleTodo } from "../actions/toggle-todo";
import { connect } from "react-redux";
import { ListItem } from "@material-ui/core";
const ToDo = props => {
  return (
    <ListItem
      onClick={() => props.onToggleTodo(props.id)}
      style={{
        textDecoration: props.isDone ? "line-through" : "none"
      }}
    >
      {props.children}
    </ListItem>
  );
};
const mapActionsToProps = dispatch => {
  return {
    onToggleTodo: id => {
      dispatch(toggleTodo(id));
    }
  };
};
export default connect(
  undefined,
  mapActionsToProps
)(ToDo);
