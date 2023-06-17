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

export const fetchAllTodoList = () => request.get('/todo/all')
export const saveTodo = (item) =>
  request.get('/todo/save', { params: item })


