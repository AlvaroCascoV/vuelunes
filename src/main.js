import { createApp } from 'vue'
import App from './App.vue'
import router from './Router.js'

let app = createApp(App)

app.config.globalProperties.$filters = {
    parImpar(numero) {
        let dibujo = "";
        if (numero % 2 == 0) {
            dibujo = "<span style='color:green'>Par</span>"
        } else {
            dibujo = "<span style='color:red'>Impar</span>"
        }
        return dibujo;
    }
}

app.use(router).mount('#app')
