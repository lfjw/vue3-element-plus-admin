import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css'

import installElementPlus from './plugins/element'

createApp(App).use(store).use(installElementPlus).use(router).mount('#app')
