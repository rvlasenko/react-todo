import styled from "styled-components"
import { Outlet } from "react-router-dom"

const LayoutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

const Header = styled.header`
  margin-bottom: 30px;
`

function Layout() {
  return (
    <LayoutContainer>
      <Header>
        <h1>Todo App</h1>
      </Header>
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  )
}

export default Layout
