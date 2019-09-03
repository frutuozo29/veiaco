import axios from 'axios'
import auth from './auth'

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:1000'
    : 'https://veiaco.herokuapp.com'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: false,
  headers: {
    'Content-Type': 'application/json'
  },
  params: {} // do not remove this, its added to add params later in the config
})

instance.interceptors.request.use(
  config => {
    const token = auth.getToken()
    if (token) {
      config.headers.common['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => response,
  error => {
    console.log(error.config)
    return Promise.reject(error)
  }
)

export default {
  get (action) {
    let url = `${BASE_URL}`
    url += action
    return instance.get(url)
  },
  post (action, data) {
    let url = `${BASE_URL}`
    url += action
    return instance.post(url, data)
  },
  put (action, data) {
    let url = `${BASE_URL}`
    url += action
    return instance.put(url, data)
  },
  delete (action) {
    let url = `${BASE_URL}`
    url += action
    return instance.delete(url)
  }
}
