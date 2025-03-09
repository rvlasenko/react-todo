import { fetchServer } from "./fetch"

export const store = (data) => fetchServer("POST", "todos", data)

export const index = (query = "", id) =>
  fetchServer("GET", "todos", { query, id })

export const update = (data) => fetchServer("PATCH", "todos", data)

export const destroy = (id) => fetchServer("DELETE", "todos", { id })
