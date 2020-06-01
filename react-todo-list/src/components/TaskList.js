import React, {useState} from "react";
import TaskDetail from "./TaskDetail"

function Form() {
    const [newTodo, setNewTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [showEditTextbox,setShowEditTextbox] = useState(false);
    const [editTextBoxId, setEditTextBoxId] = useState("");
    
    const onEdit = (index) => {
        setShowEditTextbox(true);
        setEditTextBoxId(index);
     }

     function removeNewTodo(e,index) {
         setTodos(todos.filter((todo)=>todo.id != index))
     }

     function handleNewTodoChange(e) {
        e.preventDefault() 
        setNewTodo(e.target.value)
   } 


    function updateTodo(e, index) {
         setShowEditTextbox(false);
         let newTodos = Object.assign([], todos);
    newTodos[index] = {...newTodos[index], text : newTodo };
    setTodos(newTodos);
    }

  

    return (
        <div>
          <ul>
           {todos.map((todo, index) => (
             <div class="table">
                 <table>
                    <tr>
                     <li>{todo.text}</li> 
                     <button style={{ marginLeft: "auto", float: "right" }}onClick={(e)=>removeNewTodo(e,index)} type="submit" id="btn2">Delete</button>
                    {
               
                showEditTextbox && editTextBoxId == index ? <div> <input
                placeholder="Edit Todo task..." onChange={handleNewTodoChange}/>
                <button style={{ marginLeft: "auto", float: "right" }}onClick={(e)=>updateTodo(e,index)} type="submit" id="btn2">Edit
                </button>
                 </div> : null
              }
             { showEditTextbox == false ? <button style={{ marginLeft: "auto", float: "right" }}onClick={(e)=>onEdit(index)} type="submit" id="btn2">Edit
             </button> : null }
                 </tr>
               </table>
            </div>

          ))}
          
        </ul>
    </div>
    )

}

export default Form;