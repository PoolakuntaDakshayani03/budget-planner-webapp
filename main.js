import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { auth } from './firebase'

let app = null
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router).mount('#app')
  }
})
