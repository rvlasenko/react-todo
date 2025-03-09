import { useState } from "react"
import Form from "../ui/Form"
import TextInput from "../ui/TextInput"
import Button from "../ui/Button"

function TodoSearch({ onSearch }) {
  const [value, setValue] = useState("")

  const onChange = (value) => {
    setValue(value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    onSearch(value)
  }

  const handleResetSearch = () => {
    onSearch("")
    setValue("")
  }

  return (
    <Form onSubmit={onSubmit}>
      <TextInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="What are you looking for?"
      />
      <Button type="submit">Search</Button>
      <Button type="button" onClick={handleResetSearch}>
        Reset
      </Button>
    </Form>
  )
}

export default TodoSearch
