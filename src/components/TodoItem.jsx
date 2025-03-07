import styled from "styled-components"
import Button from "./ui/Button"
import Checkbox from "./ui/Checkbox"

const TodoItemStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <TodoItemStyled>
      <label>
        <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)} />
      </label>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          flex: 1,
        }}
      >
        {todo.title}
      </span>
      <Button onClick={() => onDelete(todo.id)}>Delete</Button>
    </TodoItemStyled>
  )
}

export default TodoItem
