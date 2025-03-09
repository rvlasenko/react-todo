import { Navigate, Route, Routes } from "react-router-dom"
import styles from "./App.module.css"
import Layout from "./components/Layout"
import TodoList from "./components/todo/TodoList"
import TodoDetail from "./components/todo/TodoDetail"
import NotFound from "./components/NotFound"

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TodoList />} />
          <Route path="/task/:id" element={<TodoDetail />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
