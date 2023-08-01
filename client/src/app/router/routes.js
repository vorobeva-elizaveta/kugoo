import { NotFoundPage, LoginPage, RegistrationPage, MainUserPage } from '../../pages/index.js'

export default [
  {
    path: '/',
    name: 'home',
    component: MainUserPage
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
