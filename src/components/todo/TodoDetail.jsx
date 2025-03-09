import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { index, update, destroy } from "../../api/todos"
import { Link, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import Button from "../ui/Button"
import Form from "../ui/Form"
import TextInput from "../ui/TextInput"

const Navigation = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  a {
    color: #c3c3c3;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`

function TodoDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [todo, setTodo] = useState({})
  const [isEditing, setIsEditing] = useState(false)

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      completed: false,
    },
  })

  useEffect(() => {
    async function fetchData() {
      const data = await index("", id)
      setTodo(data)

      reset({
        title: data.title,
        completed: data.completed,
      })
    }

    fetchData()
  }, [reset, id, isEditing])

  const handleDelete = async () => {
    if (confirm("Are you sure?")) {
      await destroy(id)
      navigate("/")
    }
  }

  const handleUpdate = async (data) => {
    await update({ ...data, id })
    setIsEditing(false)
  }

  return (
    <div>
      <Navigation>
        <Link to="/">← Back</Link>
      </Navigation>
      {isEditing ? (
        <Form
          onSubmit={handleSubmit(handleUpdate)}
          style={{ flexDirection: "column" }}
        >
          <label htmlFor="title">Title</label>
          <TextInput type="text" id="title" {...register("title")} />

          <ButtonGroup>
            <Button type="submit">Save</Button>
            <Button onClick={() => setIsEditing(false)}>Cancel</Button>
          </ButtonGroup>
        </Form>
      ) : (
        <>
          <p>Title: {todo.title}</p>
          <p>Status: {todo.completed ? "Completed" : "Active"}</p>
          <ButtonGroup>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </ButtonGroup>
        </>
      )}
    </div>
  )
}

export default TodoDetail
