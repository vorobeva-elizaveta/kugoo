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

const authAxiosInterceptor = (response) => {
  return response.data
}
const authAxiosErrorInterceptor = (error) => {
  throw error
}

useAxios.interceptors.response.use(authAxiosInterceptor, authAxiosErrorInterceptor)
useAuthAxios.interceptors.response.use(authAxiosInterceptor, authAxiosErrorInterceptor)

export { useAxios, useAuthAxios }
