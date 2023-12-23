import './App.css'
import Card from './components/Card'

function App(props) {
  const author = "Bilal Raza";
  const staffName = "Staff Engineer, Karachi"
  return (
    <div className='main'>
      <Card author={author} staff={staffName} />
    </div>

  )
}

export default App
