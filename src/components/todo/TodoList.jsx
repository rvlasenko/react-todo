import { useEffect, useState } from "react"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"
import TodoSearch from "./TodoSearch"
import { store, index, update } from "../../api/todos"

function TodoList() {
  const [todos, setTodos] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    async function fetchData() {
      const data = await index(searchQuery)
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

  // const deleteTodo = (id) => {
  //   destroy(id)
  //   setTodos(todos.filter((todo) => todo.id !== id))
  // }

  return (
    <>
      <TodoForm onAdd={addTodo} />
      <TodoSearch onSearch={handleSearch} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} onToggle={toggleTodo} />
      ))}
    </>
  )
}

export default TodoList
