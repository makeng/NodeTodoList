import { createApp } from 'vue'
import App from './App.vue'
import { Button, Cell, RadioGroup } from 'vant'
import 'vant/lib/index.css';

const app = createApp(App)
app.use(Button)
  .use(RadioGroup)
  .use(Cell)
  .mount('#app')
