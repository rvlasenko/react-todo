import styled from "styled-components"

const CheckboxContainer = styled.div`
  display: flex;
`

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.checked ? "#646cff" : "white")};
  border: 2px solid ${(props) => (props.checked ? "#646cff" : "#ddd")};
  border-radius: 4px;
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    border-color: #646cff;
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px rgba(100, 108, 255, 0.2);
  }

  &:after {
    content: "";
    position: absolute;
    left: 7px;
    top: 2px;
    width: 4px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: ${(props) => (props.checked ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`

function Checkbox({ checked, ...props }) {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked} />
    </CheckboxContainer>
  )
}

export default Checkbox
