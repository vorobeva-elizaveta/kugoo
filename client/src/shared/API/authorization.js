import { useAxios, useAuthAxios } from '@/app/libs/axios/index.js'

const registration = async (email, password) => {
  return await useAxios.post('/user/registration', { email, password })
}

const login = async (email, password) => {
  const response = await useAxios.post('/user/login', { email, password })
  console.log(response)
  if (response?.access) {
    localStorage.accessToken = response.access
    useAuthAxios.defaults.headers.Authorization = response.access
  }
  return response
}

const refreshToken = async () => {
  return await useAxios.get('/user/refresh')
}

export { registration, login, refreshToken }
