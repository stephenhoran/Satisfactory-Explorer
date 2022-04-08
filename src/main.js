import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from "primevue/config"

import App from './App.vue'
import router from './router'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import Panel from 'primevue/panel'
import Card from "primevue/card"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('Panel', Panel)
app.component('Card', Card)

app.mount('#app')
