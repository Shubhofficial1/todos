import React from 'react'
import './todo.css'

const Todo = ({ todo, todos, setTodos }) => {
  const handleDelete = (e) => {
    e.preventDefault()
    setTodos(todos.filter((item) => item.id !== todo.id))
  }

  const handleComplete = (e) => {
    e.preventDefault()
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      })
    )
  }

  return (
    <>
      <li className={todo.completed === true ? 'completed' : ''}>
        {todo.text}
      </li>
      <button onClick={handleComplete}>Completed</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default Todo
