import styled from "styled-components"
import Checkbox from "../ui/Checkbox"
import { Link } from "react-router-dom"

const TodoItemStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #666;
`

function TodoItem({ item, onToggle }) {
  return (
    <TodoItemStyled>
      <label>
        <Checkbox checked={item.completed} onChange={() => onToggle(item.id)} />
      </label>
      <Link to={`/task/${item.id}`} style={{ flex: 1, color: "inherit" }}>
        <span
          style={{
            display: "-webkit-box",
            WebkitLineClamp: "1",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.title}
        </span>
      </Link>
    </TodoItemStyled>
  )
}

export default TodoItem
