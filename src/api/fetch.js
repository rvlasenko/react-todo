const HTTP_METHOD = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
}

export const fetchServer = async (
  method,
  resource,
  { id, ...payload } = {}
) => {
  let url = `http://localhost:3000/${resource}`
  let options = {
    method,
    headers: { "Content-Type": "application/json" },
  }

  if (method === HTTP_METHOD.DELETE || method === HTTP_METHOD.PATCH) {
    url += `/${id}`
  }

  if (method === HTTP_METHOD.POST || method === HTTP_METHOD.PATCH) {
    options.body = JSON.stringify(payload)
  }

  const response = await fetch(url, options)

  return await response.json()
}
