import { useForm } from "react-hook-form"
import Form from "../ui/Form"
import Button from "../ui/Button"
import styled from "styled-components"
import Input from "../ui/Input"
import Spacing from "../ui/Spacing"

const ErrorText = styled.p`
  color: #ff4444;
  font-size: 14px;
  margin: 0;
`

function TodoForm({ onAdd }) {
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

  const handleSearch = (title) => {
    onAdd(title)
    reset({
      title: "",
    })
  }

  return (
    <>
      <Form onSubmit={handleSubmit(({ title }) => handleSearch(title))}>
        <Spacing gap={8}>
          <Input
            type="text"
            placeholder="Add new todo..."
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Type at least 3 characters",
              },
            })}
          />
          <Button type="submit">Add</Button>
        </Spacing>
        {errors.title && (
          <ErrorText role="alert">{errors.title?.message}</ErrorText>
        )}
      </Form>
    </>
  )
}

export default TodoForm
