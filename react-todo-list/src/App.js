// import React, { useState } from "react";
// import './App.css';
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";

// function App() {

//   const [todos, setTodos] = useState([]);

//   function addTodo(todo) {
//     setTodos([todo, ...todos]);
//   }


//   return (
//     <div className="App">
//       <header className="App-header">
//        <p>React Todo</p>
//        <TodoForm addTodo={addTodo} />
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState('')

  return (
    <div className = "demo-component">
      <h1>Todo List 2</h1>
      <form>
        <input placeholder="Add Todo task..." onChange={handleNewTodoChange} />
        <ul>
          <li>Add styling to your app</li>
          <li>Finish todo app today</li>
        </ul>
      </form>
    </div>
  )
}

export default App;