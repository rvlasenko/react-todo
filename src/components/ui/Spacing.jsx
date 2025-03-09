import styled from "styled-components"

const SpacingStyled = styled.div`
  display: flex;
  gap: ${(props) => props.gap}px;
`

function Spacing({ children, ...rest }) {
  return <SpacingStyled {...rest}>{children}</SpacingStyled>
}

export default Spacing
