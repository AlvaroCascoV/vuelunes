import { createApp } from 'vue'
import App from './App.vue'
import router from './Router.js'

let app = createApp(App)

app.use(router).mount('#app')
