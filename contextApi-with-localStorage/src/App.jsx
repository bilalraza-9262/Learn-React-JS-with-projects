import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import { TodoProvider  } from "./context/TodoContext"


function App() {

  const [todo, setTodo] = useState([]);

  const addTodo = (todos) => {
    setTodo((prevTodo) => [{ id: Date.now(), ...todos }, ...prevTodo])
  
    // console.log(todos);
  }

  const deleteTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
  }

  const updateTodo = (id, updatedTodo) => {
    setTodo((prevTodo) => prevTodo.map((todo) => todo.id === id ? updatedTodo : todo))
  }

  const toggleTodo = (id) => {
    setTodo((prevTodo) => prevTodo.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodo(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo))
  }, [todo])
  
  return (
    <TodoProvider value={{ todo, addTodo, deleteTodo, updateTodo, toggleTodo }}>
      <div  className="h-screen bg-blue-950 flex flex-col items-center justify-center ">
        <TodoForm />
        {todo.map((todos,i) => (
          <div key={i}><TodoItem todo={todos} /></div>
        ))}


      </div>
    </TodoProvider>
  )
}

export default App
