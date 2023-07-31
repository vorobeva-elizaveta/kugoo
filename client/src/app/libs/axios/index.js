import axios from 'axios'

const useAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.accessToken != null ? 'Bearer ' + localStorage.accessToken : null
  },
  withCredentials: true
})

const useAuthAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.accessToken != null ? 'Bearer ' + localStorage.accessToken : null
  },
  withCredentials: true
})

const axiosInterceptor = (response) => {
  return response.data
}
const axiosErrorInterceptor = (response) => {
  return response.data
}

const authAxiosInterceptor = (response) => {
  return response.data
}
const authAxiosErrorInterceptor = (error) => {
  const { type, message } = error
  if (type === 'TOKEN_NOT_VALID') {
    throw { message }
  }
  throw error
}

useAxios.interceptors.response.use(axiosInterceptor, axiosErrorInterceptor)
useAuthAxios.interceptors.response.use(authAxiosInterceptor, authAxiosErrorInterceptor)

export { useAxios, useAuthAxios }
