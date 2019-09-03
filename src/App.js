import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions/add-todo";
import { changeInput } from "./actions/change-input";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";

class TodoInput extends Component {
  render() {
    console.log("input", this.props.input);

    return (
      <div>
        <FormControl>
          <InputLabel>Add Todo</InputLabel>
          <Input value={this.props.input} />
        </FormControl>
        <Button>Add to do</Button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <TodoInput />
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    input: state.input.input
  };
};
// const mapActionstoProps = (state, props) => ({
//   onAddTodo: addTodo,
//   onChangeInput: changeInput
// });

export default connect(mapStatetoProps)(TodoInput);
