import { useEffect, useState } from "react"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"
import { store, index, destroy, update } from "../api/todos"

function TodoList() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    const data = await index()

    setTodos(data)
  }

  const addTodo = async (title) => {
    const data = await store({
      title,
      completed: false,
    })

    setTodos([...todos, data])
  }

  const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    update({
      id,
      completed: !todo.completed,
    })
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo
      })
    )
  }

  const deleteTodo = (id) => {
    destroy(id)
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm onAdd={addTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      ))}
    </>
  )
}

export default TodoList
