import React, { useState  , useEffect } from "react";
import './App.css';
import TaskDetail from "./components/TaskDetail";


function App() {
  const [newTodo, setNewTodo] = useState('')
  const [showEditTextbox,setShowEditTextbox] = useState(false);
  const [editTextBoxId, setEditTextBoxId] = useState("");
  const [todos, setTodos] = useState([])

  function handleNewTodoChange(e) {
    e.preventDefault() 
    setNewTodo(e.target.value)
  }

  const onEdit = (index) => {
    setShowEditTextbox(true);
    setEditTextBoxId(index);
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
    setShowEditTextbox(false);
    

      let newTodos = Object.assign([],todos);
      newTodos[index] = {...newTodos[index], text : newTodo };
      setTodos(newTodos);
       
  }


  return (
    <div className = "Todo-lists">
      <h1> Todo List 2</h1>
      <div className= "header">
        <input class="placeholder" placeholder="Add Todo task..." onChange={handleNewTodoChange} />
        <button onClick={handleNewTodo} type="submit" id="btn">Add</button>
        <ul>
          {todos.map((todo,index) => (
           <TaskDetail index={index} todo={todo} removeNewTodo={removeNewTodo} updateTodo={updateTodo} onEdit={onEdit} handleNewTodoChange={handleNewTodoChange} showEditTextbox={showEditTextbox} editTextBoxId={editTextBoxId}   />

          ))}
          
        </ul>
        
        </div> 
    </div>
  )
}

export default App;