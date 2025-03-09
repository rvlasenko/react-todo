import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { getOne, update, destroy } from "../../api/todos"
import { Link, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import Button from "../ui/Button"
import Form from "../ui/Form"
import Input from "../ui/Input"

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

const ErrorText = styled.p`
  color: #ff4444;
  font-size: 14px;
  margin-top: 0;
`

function TodoDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [todo, setTodo] = useState({})
  const [isEditing, setIsEditing] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
    },
  })

  useEffect(() => {
    async function fetchData() {
      const data = await getOne(id)
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
          <Input
            label="Title"
            type="text"
            id="title"
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Type at least 3 characters",
              },
            })}
          />

          {errors.title && (
            <ErrorText role="alert">{errors.title?.message}</ErrorText>
          )}

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
