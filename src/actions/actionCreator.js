

export const  addTask = (id, text, isCompleted) => ({
    type: 'ADD_TASK',
        id,
        text,
        isCompleted

})

export const removeTask = id => ({
    type: 'REMOVE_TASK',
    id
})