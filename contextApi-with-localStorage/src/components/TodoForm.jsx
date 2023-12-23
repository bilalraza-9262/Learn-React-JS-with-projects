import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoForm() {
	const { addTodo } = useTodo();
	const [todo, setTodoVal] = useState("");

	const formHandler = (e) => {
		e.preventDefault();

		if (!todo) return
		// console.log(todoVal);
		addTodo({ todo, completed: false });
		setTodoVal("")


	}
	return (
		<div className=''>
			<form onSubmit={formHandler} className='flex ' >
				<input
					className='w-[20vw] border-black/10 outline-none duration-150 bg-white/20 rounded-l-lg px-3 py-1.5 '
					type="text"
					placeholder='Write Todo'
					value={todo}
					onChange={(e) => setTodoVal(e.target.value)}
				/>
				<button className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0' type='submit'> Add</button>
			</form>

		</div>
	)
}

export default TodoForm
