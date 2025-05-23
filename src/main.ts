import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { PrimeVue } from '@primevue/core'

import  ToastService  from 'primevue/toastservice'
import App from './App.vue'
import router from './router'

import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

import "./style.css";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.use(ToastService)
app.mount('#app')
