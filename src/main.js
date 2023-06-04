import { createApp } from 'vue'
import App from './App.vue'
import { Checkbox } from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
app
  .use(Checkbox)
  .mount('#app')
