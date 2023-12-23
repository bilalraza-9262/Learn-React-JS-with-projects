import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import ButtonTheme from './components/ButtonTheme'

function App() {
  const [themeMode, setTheme] = useState("light")

  const lightTheme = () => {
    setTheme("light")
  };
  const darkTheme = () => {
    setTheme("dark")
  };

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <div className='w-1/2 m-auto dark:bg-gray-800 p-10 rounded-lg border bg-slate-200'>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div>
          <div className='text-2xl dark:text-white font-bold'><span className='text-red-400'>Dark</span> and <span className='text-green-300'>Light</span> Theme</div>
          <div>
            <ButtonTheme />
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App
