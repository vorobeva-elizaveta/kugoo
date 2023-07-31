import { useAxios, useAuthAxios } from '@/app/libs/axios/index.js'
import router from '@/router/index'

const registration = async (email, password) => {
  return await useAxios.post('/user/registration', { email, password })
}

const login = async (email, password) => {
  const response = await useAxios.post('/user/login', { email, password })
  setAccessToken(response?.access)
  return response
}

const logout = async () => {
  const response = await useAxios.get('logout')
  deleteAccessToken()
  router.push({ name: 'login' })
  return response
}

const refreshToken = async () => {
  const response = await useAxios.get('/user/refresh')
  if (response?.type === 'TOKEN_NOT_VALID') {
    await logout()
    return
  }
  setAccessToken(response?.access)
  return response
}

const setAccessToken = async (token) => {
  if (token) {
    localStorage.accessToken = token
    useAuthAxios.defaults.headers.Authorization = token
  }
}

const deleteAccessToken = async (token) => {
  if (token) {
    localStorage.clear('accessToken')
  }
}

export { registration, login, logout, refreshToken }
