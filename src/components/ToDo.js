import React from "react";
import {Grid, Button } from "@material-ui/core";
const ToDo = props => {
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
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
        <Grid item>
          <Button  style={{marginTop: '10px'}} variant="outlined" color = "secondary" onClick={() => props.onClickRemove(props.id)}>X</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ToDo;
