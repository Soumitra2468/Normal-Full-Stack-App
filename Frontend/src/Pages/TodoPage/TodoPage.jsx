// src/pages/TodoPage.jsx
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoLayout from '../../Layouts/TodoLayout'
import { createTodo, getTodo } from '../../Redux/Slices/todoSlice'

const TodoPage = () => {
  const dispatch = useDispatch()
  // rename for clarity: todos array from Redux
  const todos = useSelector((state) => state.todos.todos)
//   todos = todos.reverse()

  // local form state
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [completed, setCompleted] = useState(false)

  // fetch on mount
  useEffect(() => {
    dispatch(getTodo())
  }, [dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // dispatch creation; thunk should handle posting + refresh
    await dispatch(createTodo({ title, description, completed }))
    // clear form
    await dispatch(getTodo())
    setTitle('')
    setDescription('')
    setCompleted(false)
  }

  return (
    <TodoLayout>
      <div className="min-h-screen bg-gray-50 p-6">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">My Todo List</h1>
        </header>

        {/* Todo Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mb-12"
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Description</label>
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
          {todos && todos.length > 0 ? (
            todos.slice()
            .reverse().map((todo, idx) => (
              <li
                key={todo._id || idx}
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
            ))
          ) : (
            <p className="text-center text-gray-500">No todos yet.</p>
          )}
        </ul>
      </div>
    </TodoLayout>
  )
}

export default TodoPage
