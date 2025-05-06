// src/App.jsx
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css' // Tailwind’s styles imported here
import axios from 'axios'
const BACKEND_URI = import.meta.env.VITE_BACKEND_URI
console.log('Frontend URI:', BACKEND_URI)

function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [completed, setCompleted] = useState(false)
  const [todos, setTodos] = useState([])

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const data = await axios.post(`${BACKEND_URI}/todo-create`, {
        title,
        description,
        completed
      })
      console.log('Todo added successfully:', data);
      
    } catch (error) {
      console.error('Error adding todo:', error)
      
    }


    setTodos([...todos, { title, description, completed }])
    setTitle('')
    setDescription('')
    setCompleted(false)
  }
  const getAllTodos = async() => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/user/todo-get')
      setTodos(response?.data?.data)
    } catch (error) {
      console.error('Error fetching todos:', error)
    }
  }
useEffect(() => {
getAllTodos()
},[])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="flex items-center justify-between mb-8">
        <div className="flex space-x-4">
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="h-10" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="h-10" alt="React logo" />
          </a>
        </div>
        <h1 className="text-2xl font-bold">Vite + React Todo List</h1>
      </header>

      {/* Todo Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mb-12"
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 h-24 resize-none focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            checked={completed}
            onChange={e => setCompleted(e.target.checked)}
            id="completed"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="completed" className="ml-2 block text-gray-700">
            Completed
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Todo
        </button>
      </form>

      {/* List of Todos */}
      <ul className="max-w-lg mx-auto space-y-4">
        {todos.map((todo, idx) => (
          <li
            key={idx}
            className={`p-4 rounded-lg shadow ${
              todo.completed ? 'bg-green-100' : 'bg-white'
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{todo.title}</h3>
              <span className="text-sm">
                {todo.completed ? '✅' : '❌'}
              </span>
            </div>
            <p className="text-gray-700 mb-2">{todo.description}</p>
            <small className="text-gray-500">
              {todo.completed ? 'Completed' : 'Not done'}
            </small>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
