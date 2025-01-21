import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.config.errorHandler = (err) => {
  console.log(err)
}

app.mount('#app')
