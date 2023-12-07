import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/index.css'
import axios from "axios"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all'

/* eslint-disable no-new */
createApp(App).use(router).mount('#app')


