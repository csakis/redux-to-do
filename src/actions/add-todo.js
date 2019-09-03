export const ADD_TODO='ADD_TODO'
export const addTodo = ({id, text}) => {
    return {
        type: ADD_TODO,
        payload: {
            id,
            text
        }
    }
}