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
    setTodos([...todos, { text: newTodo , id : todos.length}])
  }

  function removeNewTodo(e,index) {
     setTodos(todos.filter((todo)=>todo.id != index))
  }

  return (
    <div className = "Todo-lists">
      <h1> Todo List 2</h1>
      <div className= "header">
        <input class="placeholder" placeholder="Add Todo task..." onChange={handleNewTodoChange} />
        <button onClick={handleNewTodo} type="submit" id="btn">Add</button>
        <ul>
          {todos.map((todo,index) => (
            <div class="table">
              <table>
                <tr>
                <li>{todo.text}</li> 
                <button onClick={(e)=>removeNewTodo(e,index)} type="submit" id="btn">Delete</button>
                </tr>
              </table>
            </div>

          ))}
          
        </ul>
        
        </div> 
    </div>
  )
}

export default App;