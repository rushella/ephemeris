import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.errorHandler = (err) => {
  console.log(err)
}

app.mount('#app')
