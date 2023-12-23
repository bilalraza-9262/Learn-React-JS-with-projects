import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoItem({ todo }) {

	const [IsEditable, setIsEditable] = useState(false);
	const [TodoMsg, setTodoMsg] = useState(todo.todo);
	const { toggleTodo, deleteTodo, updateTodo } = useTodo();

	const todoComplete = () => {
		toggleTodo(todo.id)
		// console.log(todo);
	}

	const todoEdit = () => {
		updateTodo(todo.id, { ...todo, todo: TodoMsg });
		setIsEditable(false)
	}

	return (
		<div className='flex gap-x-3 px-3 py-1.5 border-black/10 rounded-lg bg-[#c6e9a7]'>
			<input type="checkbox"
				checked={todo.completed}
				onChange={todoComplete}
			/>
			<input type="text"
				className={`border outline-none w-full bg-transparent rounded-lg ${IsEditable ? "border-black/10 px-2" : "border-transparent"
					} ${todo.completed ? "line-through" : ""}`}
				value={TodoMsg}
				readOnly={!IsEditable}
				onChange={(e) => setTodoMsg(e.target.value)}
			/>

			<button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
				onClick={() => {
					if (todo.completed) return;


					if (IsEditable) {
						todoEdit()
						console.log(IsEditable);
					} else setIsEditable((prv) => !prv)


				}}
				disabled={todo.completed}>{IsEditable ? "📁" : "✏️"}</button>

			<button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
				onClick={() => { deleteTodo(todo.id) }}>❌</button>
		</div>
	)
}

export default TodoItem
