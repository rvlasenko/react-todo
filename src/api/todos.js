import { fetchServer } from "./fetch"

export const store = (data) => fetchServer("POST", "todos", data)

export const index = () => fetchServer("GET", "todos")

export const update = (data) => fetchServer("PATCH", "todos", data)

export const destroy = (id) => fetchServer("DELETE", "todos", { id })
