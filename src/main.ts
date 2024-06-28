import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import element from 'element-plus';
// import 'element-plus/lib/theme-pulse/index.css'; // 引入 Pulse 主题样式
createApp(App).use(router).use(element).mount('#app')
