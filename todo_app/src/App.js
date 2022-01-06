import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import Todo from "./Todo";
import db from './firebase'

function App() {
  const [todos, setTodos] = useState(['abc','def']);
  const [input, setInput] = useState("");

 //when the app loads, we need to listen to the database and fetch the new todos as they get added/removed 

 useEffect(()=>{
   //this code here... fires when the app loads
   db.collection('todos').onSnapshot(snapshot=>{
     setTodos(snapshot.docs.map(doc=> doc.data().todo))
   })
 },[])

  const addTodo = (event) => {
    // this will fire when button is clicked
    event.preventDefault(); //will stop auto-refreshing
    console.log("Im working");
    setTodos([...todos, input]);
    setInput(""); //clear up the input after submiting
    console.log(todos);
  };
  return (
    <div className="App">
      <h1>Hello world 🚀;</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo ✍️</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
         </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
        {/* <button type='submit' onClick={addTodo}>Add Todo</button> */}
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
