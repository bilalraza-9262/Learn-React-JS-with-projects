import React, { useContext } from 'react'
import { createContext } from 'react'

const todos = {
	todo: [{
		id: 1,
		todo: "Todo Msg",
		completed: false
	}],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {}
};

export const TodoCtx = createContext(todos);

export function useTodo() {
	return useContext(TodoCtx)

}

export const TodoProvider = TodoCtx.Provider
