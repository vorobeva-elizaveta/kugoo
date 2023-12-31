import './app/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './app/router/index.js'

import { componentsForExport } from './shared/ui-kit/config'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import FontAwesomeIcons from './app/libs/font-awesome.conf.js'

library.add(...FontAwesomeIcons)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('fa-i', FontAwesomeIcon)

componentsForExport.forEach((component) => {
  app.component(component.name, component.path)
})

app.mount('#app')
