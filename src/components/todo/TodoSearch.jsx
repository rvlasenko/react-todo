import { useState } from "react"
import Form from "../ui/Form"
import Button from "../ui/Button"
import Input from "../ui/Input"
import Spacing from "../ui/Spacing"

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
      <Spacing gap={8}>
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="What are you looking for?"
        />
        <Button type="submit">Search</Button>
        <Button type="button" onClick={handleResetSearch}>
          Reset
        </Button>
      </Spacing>
    </Form>
  )
}

export default TodoSearch
