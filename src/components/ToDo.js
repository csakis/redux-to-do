import React from "react";
import { Grid } from "@material-ui/core";
import ToDoDelete from './ToDoDelete'
const ToDo = props => (
  <React.Fragment>
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item>
        <span
          onClick={() => props.onClickTodo(props.id)}
          style={{
            textDecoration: props.isDone ? "line-through" : "none"
          }}
        >
          {props.children}
        </span>
      </Grid>

        <ToDoDelete id={props.id}/>
        {/* <Button
          style={{ marginTop: "10px" }}
          variant="outlined"
          color="secondary"
          onClick={() => props.onClickRemove(props.id)}
        >
          X
        </Button> */}
    </Grid>
  </React.Fragment>
);

export default ToDo;
