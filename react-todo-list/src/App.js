import React, { useState  , useEffect } from "react";
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

  function updateTodo(e, index) {
    debugger

      let newTodos = Object.assign([],todos);
      newTodos[index] = {...newTodos[index], text : newTodo };
      setTodos(newTodos);
      //todos[index] = {text : "abdullah" , id : index }
   
      //setTodos(todos.);  
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
               <button style={{ marginLeft: "auto", float: "right" }}onClick={(e)=>removeNewTodo(e,index)} type="submit" id="btn2">Delete</button>
               <input
               placeholder="Add Todo task..." onChange={handleNewTodoChange}/>
               <button style={{ marginLeft: "auto", float: "right" }}onClick={(e)=>updateTodo(e,index)} type="submit" id="btn2">Edit</button>
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