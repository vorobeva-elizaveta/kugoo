import { NotFoundPage, LoginPage, RegistrationPage } from '@/pages/index.js'

export default [
  {
    path: '/',
    name: 'home',
    component: NotFoundPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationPage
  },
  {
    path: '/*',
    name: 'not-found',
    component: NotFoundPage
  }
]
