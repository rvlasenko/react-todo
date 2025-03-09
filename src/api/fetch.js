const API_BASE_URL = "http://localhost:3000"

const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
}

const buildUrl = (resource, id, query) => {
  const base = `${API_BASE_URL}/${resource}`
  if (id) {
    return `${base}/${id}`
  }
  if (query) {
    return `${base}/?title_like=${query}`
  }
  return base
}

const buildRequestOptions = (method, payload) => ({
  method,
  headers: DEFAULT_HEADERS,
  ...(Object.values(payload).length && { body: JSON.stringify(payload) }),
})

export const fetchServer = async (
  method,
  resource,
  { id, query, ...payload } = {}
) => {
  try {
    const url = buildUrl(resource, id, query)
    const options = buildRequestOptions(method, payload)

    const response = await fetch(url, options)

    return await response.json()
  } catch (error) {
    console.error(`API request failed: ${error.message}`)
    throw error
  }
}
