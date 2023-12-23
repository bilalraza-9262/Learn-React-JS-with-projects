import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState("");
  const [numberallowed, setNumAllowed] = useState(false);
  const [characterAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const passRef = useRef(null);

  const passGenerate = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) str += '123456789';
    if (characterAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      const randomGenerate = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomGenerate)

    }
    setPassword(pass)

  }, [length, numberallowed, characterAllowed])

  const copyPassword = useCallback(() => {
    passRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password])


  useEffect(() => {
    passGenerate()
  }, [length, numberallowed, characterAllowed])

  return (
    <div className='main'>

      <div className='inner'>
        <h1>Password Generator</h1>

        <input value={password} ref={passRef} type="text" id="password" placeholder='Password' readOnly />

        <button onClick={copyPassword} style={{ padding: 7, backgroundColor: "#59689c", margin: 5 }}>Copy</button>

        <div className='bottom'>

          <input value={length} onChange={(e) => { setLength(e.target.value) }} type="range" min={8} max={20} name="" />

          <label >length ({length})</label>

          <input defaultChecked={numberallowed} onChange={() => setNumAllowed((prev) => !prev)} type="checkbox" name="" id="" /><span style={{ fontSize: 20 }}> Number </span>

          <input defaultChecked={characterAllowed} onChange={() => setCharAllowed((prev) => !prev)} type="checkbox" name="" id="" /><span style={{ fontSize: 20 }}> Character </span>

        </div>
      </div>
    </div>
  )
}

export default App
