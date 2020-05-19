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

  return (
    <div className = "Todo-lists">
      <h1> Todo List 2</h1>
      <div className= "header">
        <button onClick={handleNewTodo} type="submit" id="btn">Add</button>
        <input placeholder="Add Todo task..." onChange={handleNewTodoChange} />
        <ul>
          {todos.map((todo) => (
            <li>{todo.text}</li>
          ))}
        </ul>
        </div> 
    </div>
  )
}

export default App;