import React from "react";

const TodoInput = ({ value, onChange, onKeyPress }) => {
    return (
        <div>
            <input
                placeholder='Click or die'
                onChange={onChange}
                value={value}
                onKeyPress={onKeyPress}

            />
        </div>

)
}
export default TodoInput
