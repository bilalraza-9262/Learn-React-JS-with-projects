import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	todos: []
}

export const todoSilce = createSlice(
	{
		name: "todo",
		initialState,
		reducers: {
			addTodo: (state, action) => {
				const todo = {
					id: nanoid(),
					text: action.payload
				}
				state.todos.push(todo)
			},
			deleteTodo: (state, action) => {
				state.todos = state.todos.filter(todo => todo.id !== action.payload)
			}
		}
	}
)

export const { addTodo, deleteTodo } = todoSilce.actions;

export default todoSilce.reducer

