import axios from 'axios'

// create an axios instance
console.log(1111,process.env.VUE_APP_BASE_API)
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, 
  baseURL: 'http://localhost:3005/', 
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  timeout: 10000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data) {
      return response.data
    } 
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
