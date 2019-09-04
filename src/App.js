import React from "react";
import TodoInput from "./components/ToDoInput";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container maxWidth="md" >
      <h1>React-Redux To Do List with Material-UI</h1>
      <TodoInput />
    </Container>
  );
}

export default App;
