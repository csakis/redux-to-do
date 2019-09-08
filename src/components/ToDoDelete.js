import React from "react";
import { Grid, Button } from "@material-ui/core";
import { removeTodo } from "../actions/remove-todo";
import { connect } from "react-redux";
const ToDoDelete = props => {
  return (
    <Grid item>
      <Button
        style={{ marginTop: "10px" }}
        variant="outlined"
        color="secondary"
        onClick={() => props.onRemoveTodo(props.id)}
      >
        X
      </Button>
    </Grid>
  );
};

const mapActionsToProps = dispatch => ({
  onRemoveTodo: id => {
    dispatch(removeTodo(id));
  }
});

export default connect(
  undefined,
  mapActionsToProps
)(ToDoDelete);
