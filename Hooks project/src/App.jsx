import { useState } from 'react'
import './App.css'


// let count=12


function App() {

  //here is "Hooks" method
  let [count, setCounter] = useState(10)

  //add value function
  function add() {
    setCounter(count + 1)
    // console.log(count);
  }

  // //here remove value function1

  function remove() {
    setCounter(count - 1)
    //  console.log(count);
  }
  if (count < 0) {
    setCounter(0)
  }

  return (
    <div id='main'>
      <h1>Count: {count}</h1>
      <button onClick={add}>Add Value</button>
      <br /><br />
      <button onClick={remove}>Remove Value</button>
    </div>
  )
}

export default App