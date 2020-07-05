import React from "react";

const TodoItem = ({text, isCompleted, removeTask, id}) => (
    <li>
        <span>{text}</span>
        <button onClick={() => removeTask(id)}>Убрать нахуй</button>
    </li>
)

export default TodoItem