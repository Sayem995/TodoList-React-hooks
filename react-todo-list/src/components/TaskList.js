import React, { useState, Component } from 'react';

function TaskList() {

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

return (
    <div class="List">
     <input class="placeholder" placeholder="Add Todo task..." onChange={handleNewTodoChange} />
        <button onClick={handleNewTodo} type="submit" id="btn">Add</button>
    </div>
)
}

export default TaskList;
