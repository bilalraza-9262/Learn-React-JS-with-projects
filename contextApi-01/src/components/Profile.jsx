import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {
	const { User } = useContext(UserContext)

	if (!User) {
		return <div>Please Login</div>
	} else {
		return <div>
			{User.userName}<br />
			{User.Password}
		</div>
	}
}

export default Profile
