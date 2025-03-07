import styled from "styled-components"

const ButtonStyled = styled.button`
  padding: 8px 16px;
  background: #646cff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #535bf2;
  }
`

function Button({ children, ...rest }) {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>
}

export default Button
