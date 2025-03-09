import styled from "styled-components"

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

function Form({ children, ...rest }) {
  return <FormStyled {...rest}>{children}</FormStyled>
}

export default Form
