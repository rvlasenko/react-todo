import styled from "styled-components"

const InputStyled = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  color: #333;
  outline: 1px solid transparent;
  transition: all 0.2s;

  &:focus {
    outline: 2px solid #646cff;
    outline-offset: -2px;
  }

  &::placeholder {
    color: #999;
  }
`

function Input({ label, ...props }) {
  return (
    <>
      {label && <label htmlFor={props.name}>{label}</label>}
      <InputStyled id={props.name} {...props} />
    </>
  )
}

export default Input
