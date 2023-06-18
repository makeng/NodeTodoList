import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000', // express server
})

function dataParser(res) {
  const { data, status } = res
  if (status === 200) {
    return data
  }
  return Promise.reject(data)
}

request.interceptors.response.use(dataParser)

export const fetchTodoList = () =>
  request.get('/todo')
export const saveTodo = (item) =>
  request.post('/todo', { params: item })
export const deleteTodo = (id) =>
  request.delete('/todo', { params: { id } })
export const updateTodo = (item) =>
  request.put('/todo', { params: item })
