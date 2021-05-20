import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css'

import { ElMessageBox, ElMessage, ElNotification } from 'element-plus'

import installElementPlus from './plugins/element'

import './style/index.scss'
import initSvgIcon from '@/icons/index'

createApp(App).use(store).use(installElementPlus).use(initSvgIcon).use(router).mount('#app')

// vue实例上挂载属性类型声明
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: typeof ElMessage;
    $notify: typeof ElNotification;
    $confirm: typeof ElMessageBox.confirm;
    $alert: typeof ElMessageBox.alert;
    $prompt: typeof ElMessageBox.prompt;
  }
}
