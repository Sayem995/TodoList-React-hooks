import React, { useState } from "react";
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  function handleNewTodoChange(e) {
    e.preventDefault() 
    setNewTodo(e.target.value)
  }

  function handleNewTodo(e) {
    e.preventDefault()
    if (newTodo === "") return
    setTodos([...todos, { text: newTodo}])
  }

  function removeNewTodo(e) {
    e.preventDefault()
    newTodo.splice(e.target.value);
    setTodos([...todos, { text: newTodo}])
  }

  return (
    <div className = "Todo-lists">
      <h1> Todo List 2</h1>
      <div className= "header">
        <input placeholder="Add Todo task..." onChange={handleNewTodoChange} />
        <button onClick={handleNewTodo} type="submit" id="btn">Add</button>
        <ul>
          {todos.map((todo) => (
            <li>{todo.text}</li>
          ))}
          <button onClick={removeNewTodo} type="submit" id="btn">Delete</button>
        </ul>
        
        </div> 
    </div>
  )
}

export default App;