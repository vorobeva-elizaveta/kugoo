import './app/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './app/router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPaperPlane, faBasketShopping, faMagnifyingGlass, faBars} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPaperPlane, faBasketShopping, faMagnifyingGlass, faBars)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
