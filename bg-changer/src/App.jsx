import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='main' style={{ backgroundColor: color }}>
      <div className='bottom'>
        <button onClick={() => {
          setColor("red");
        }} style={{ backgroundColor: "red" }}>Red</button>
        <button onClick={() => {
          setColor("cyan");
        }} style={{ backgroundColor: "cyan" }}>Cyan</button>
        <button onClick={() => {
          setColor("yellow");
        }} style={{ backgroundColor: "yellow" }} >Yellow</button>
        <button onClick={() => {
          setColor("green");
        }} style={{ backgroundColor: "green" }}>Green</button>
      </div>
    </div>
  )
}

export default App
