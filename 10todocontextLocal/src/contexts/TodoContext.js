import {createContext, useContext} from 'react';

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todoTitle: "Todo Mssg",
            completed: false,
        }
    ],
    addTodo: (todoTitle) => {},
    editTodo: (id, todoTitle) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})



export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider