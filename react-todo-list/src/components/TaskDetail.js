import React from'react'
 
const TaskDetail= (props) => {
    const { index , todo , removeNewTodo , updateTodo , onEdit , handleNewTodoChange  , showEditTextbox , editTextBoxId  } = props;
return (
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
    )
}
 
export default TaskDetail


