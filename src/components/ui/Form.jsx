import styled from "styled-components"

const FormStyled = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`

function Form({ children, ...rest }) {
  return <FormStyled {...rest}>{children}</FormStyled>
}

export default Form
