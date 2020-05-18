import React, { useState } from "react";

function TodoForms( addTodo ) {
    const [todo, setTodo] = ({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid.v4() });

            setTodo({...todo, task: "" });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name= "task"
                type= "text"
                value={todo.task}
                onChange={handleTaskInputChange}
                />
            <button type="submit" />
        </form>
    );
}

export default TodoForms;