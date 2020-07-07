

const tasks = [
    {
        id: 1,
        text: 'Сыр',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Помидорка',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'Огурец',
        isCompleted: false,
    }
];

const task = (state = tasks, {id, text, isCompleted, type}) => {
    switch (type) {
        case 'ADD_TASK' :
            return [
                ...state, {
                    id,
                    text,
                    isCompleted,
                }
            ]
        case 'REMOVE_TASK':
            return [...state].filter(task => task.id !== id)
        default:
            return state
    }
}

export default task