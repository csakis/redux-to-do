import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/add-todo";
import { changeInput } from "../actions/change-input";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";

const TodoInput = props => {
  console.log("input", props);

  return (
    <div>
      <FormControl>
        <InputLabel>Add Todo</InputLabel>
        <Input value={props.input} onChange={props.onChangeInput} />
      </FormControl>
      <Button onClick={()=>props.onAddTodo(props.index+1, props.input)}>Add to do</Button>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    input: state.input.input,
    index:state.todos.index
  };
};
const mapActionstoProps = (dispatch) => {
 
  return {
    onAddTodo: (id, text) => {
        console.log('p', id, text);
        dispatch(addTodo({id, text}))
    },
    onChangeInput: e => dispatch(changeInput(e.target.value))
  };
};

export default connect(
  mapStatetoProps,
  mapActionstoProps
)(TodoInput);
