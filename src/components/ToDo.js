import React from "react";
import { ListItem } from "@material-ui/core";
const ToDo = props => {
  return (    
    <ListItem>
        <span  onClick={() => props.onClickTodo(props.id)}
      style={{
          textDecoration: props.isDone ? "line-through" : "none"
        }}>{props.children} </span> 
      <span onClick = {() => props.onClickRemove(props.id)}>X</span> 
    </ListItem>     
  );
};

export default ToDo;
