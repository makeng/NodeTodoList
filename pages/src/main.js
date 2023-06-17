import { createApp } from 'vue'
import App from './App.vue'
import { Button, Checkbox, Dialog } from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
app
  .use(Button)
  .use(Checkbox)
  .use(Dialog)
  .mount('#app')
