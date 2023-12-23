import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext';
import "./login.css"

function Login() {
	const { setUser } = useContext(UserContext)

	const [userName, setuserName] = useState("");
	const [Password, setPassword] = useState("");

	const submitHandler = (e) => {
		e.preventDefault()
		setUser({userName,Password})
	}

	return (
		<div>

			<input value={userName} onChange={(e) => setuserName(e.target.value)}  type="text" placeholder='UserName' />
			<input value={Password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='UserPassword' />
			<button className='btn' onClick={submitHandler} type='submit'>Submit</button>

		</div>
	)
}

export default Login