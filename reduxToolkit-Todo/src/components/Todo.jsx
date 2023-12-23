import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../features/todo/todoSlice';

function Todo() {
	const dispatch = useDispatch();
	const todos = useSelector(state => state.todo.todos);


	return (
		<div style={{}}>
			{todos.map((todo) => (
				<div style={{display:"flex",height:"28px", justifyContent:"space-between", margin:"10px"}} key={todo.id}>
					<li style={{ listStyle:"none", border:"2px solid white", paddingRight:"20px", backgroundColor:"whitesmoke"}}>{todo.text}</li>
					<button style={{padding:"4px", borderRadius:"5px"}} onClick={() => dispatch(deleteTodo(todo.id))}>Remove</button>
				</div>

			))}

		</div>
	)
}


export default Todo
