import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/assets/reset.scss'

import loadAllPlugins from '@/plugins'

const app = createApp(App)

app.use(createPinia())
app.use(router)

loadAllPlugins(app)

app.mount('#app')
