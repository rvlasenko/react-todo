import { useState } from "react"
import Form from "../ui/Form"
import TextInput from "../ui/TextInput"
import Button from "../ui/Button"

function TodoForm({ onAdd }) {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    onAdd(text)
    setText("")
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo..."
      />
      <Button type="submit">Add</Button>
    </Form>
  )
}

export default TodoForm
