import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCtxProvider from './context/UserCtxProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <div>
      <UserCtxProvider>
        <Login />
        <Profile />
      </UserCtxProvider>
    </div>
  )
}

export default App
