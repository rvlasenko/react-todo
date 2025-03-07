import styled from "styled-components"

const InputStyled = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`

function Input({ children, ...rest }) {
  return <InputStyled {...rest}>{children}</InputStyled>
}

export default Input
