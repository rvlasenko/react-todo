import { fetchServer } from "./fetch"

export const store = (data) => fetchServer("POST", "todos", data)

export const getAll = (query = "") => fetchServer("GET", "todos", { query })

export const getOne = (id) => fetchServer("GET", "todos", { id })

export const update = (data) => fetchServer("PATCH", "todos", data)

export const destroy = (id) => fetchServer("DELETE", "todos", { id })
