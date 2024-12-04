import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'

createApp(App).mount('#app')

createApp(App).use(MotionPlugin).mount('#app')