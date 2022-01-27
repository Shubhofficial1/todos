import './App.css'
import { useState } from 'react'
import Todo from './component/Todo'

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    setTodos([
      ...todos,
      { text: input, completed: false, id: Math.random() * 1000 },
    ])
    setInput('')
  }

  return (
    <div className='App'>
      <pre>{JSON.stringify(todos, null, 3)}</pre>
      <form>
        <h1>Hello Programmers 🚀</h1>
        <input
          value={input}
          onChange={(event) => {
            setInput(event.target.value)
          }}
        />
        <button disabled={!input} type='submit' onClick={handleClick}>
          Add todo
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  )
}

export default App
