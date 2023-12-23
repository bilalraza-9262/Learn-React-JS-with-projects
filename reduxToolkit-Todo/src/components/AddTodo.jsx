import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
	const dispatch = useDispatch()
	const [userinput, setuserinput] = useState("");

	const formHandler = (e) => {
		e.preventDefault();
		dispatch(addTodo(userinput));
		setuserinput("")
	}
	return (
		<div>
			<form onSubmit={formHandler}>
				<input style={{padding:"7px", borderRadius:"6px"}} type="text"
					placeholder='Write Todo'
					value={userinput}
					onChange={(e) => setuserinput(e.target.value)}

				/>
				<button style={{padding:"3px",borderRadius:"3px", margin:"4px"}} className='addButton' type="submit">Add</button>
			</form>
		</div>
	)
}

export default AddTodo
