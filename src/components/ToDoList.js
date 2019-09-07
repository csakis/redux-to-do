import React, { Component } from "react";
import ToDo from "./ToDo";
import { connect } from "react-redux";
import { List } from "@material-ui/core";
class ToDoList extends Component {
  render() {
    const list = this.props.todos.map(x => (
      <ToDo key={x.id} isDone = {x.isDone} id={x.id}>
        {x.text}
      </ToDo>
    ));
    return <List>{list}</List>;
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  };
};


export default connect(
  mapStateToProps
)(ToDoList);
