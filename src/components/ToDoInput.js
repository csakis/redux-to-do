import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/add-todo";
import { changeInput } from "../actions/change-input";
import { FormControl, Grid, Button, TextField } from "@material-ui/core";

const TodoInput = props => (
  <React.Fragment>
    <FormControl>
      {/* <Inputbel>Add Todo</InputLabel> */}
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={8}>
          <TextField
            variant="outlined"
            label="Add ToDo"
            margin="normal"
            value={props.input}
            onChange={props.onChangeInput}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              props.onAddTodo(props.index + 1, props.input);
            }}
          >
            Add to do
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  </React.Fragment>
);

const mapStateToProps = state => {
  return {
    input: state.input.input,
    index: state.todos.index
  };
};
const mapActionsToProps = dispatch => {
  return {
    onAddTodo: (id, text) => {
      dispatch(addTodo({ id, text }));
      dispatch(changeInput(""));
    },
    onChangeInput: e => dispatch(changeInput(e.target.value))
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TodoInput);
