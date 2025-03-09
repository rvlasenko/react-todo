import { useEffect, useState } from "react"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"
import TodoSearch from "./TodoSearch"
import { store, getAll, update } from "../../api/todos"

function TodoList() {
  const [todos, setTodos] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    async function fetchData() {
      const data = await getAll(searchQuery)
      setTodos(data)
    }

    fetchData()
  }, [searchQuery])

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const addTodo = async (title) => {
    const data = await store({ title, completed: false })

    setTodos([...todos, data])
  }

  const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    update({ id, completed: !todo.completed })
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo
      })
    )
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <TodoForm onAdd={addTodo} />
        <TodoSearch onSearch={handleSearch} />
        <div>
          {todos.map((todo) => (
            <TodoItem key={todo.id} item={todo} onToggle={toggleTodo} />
          ))}
        </div>
      </div>
    </>
  )
}

export default TodoList
