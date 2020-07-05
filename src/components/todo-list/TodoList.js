import React from "react";
import TodoItem from "../todo-item/TodoItem";

const TodoList = ({tasksList, removeTask}) => (
    <ul>
        {tasksList.map(({id, text, isCompleted}) => (
                <TodoItem  removeTask={removeTask} id={id} key={id} text={text} isCompleted={isCompleted}/>
            )
        )}
    </ul>
)

export default TodoList



