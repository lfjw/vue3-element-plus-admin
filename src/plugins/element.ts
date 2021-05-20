import type { App } from 'vue'
import {
  locale,
  ElButton,
  ElMessage,
  ElNotification,
  ElMessageBox
} from 'element-plus'

import 'element-plus/lib/theme-chalk/index.css'

import lang from 'element-plus/lib/locale/lang/zh-cn'

import 'dayjs/locale/zh-cn'

export type Size = 'default'| 'medium'|'small'|'mini';

const element = (app: App): void => {
  locale(lang)

  // 按需导入组件列表
  const components = [
    ElButton
  ]

  components.forEach(component => {
    app.component(component.name, component)
  })

  // Vue.prototype 替换为 config.globalProperties
  // 文档说明 https://v3.cn.vuejs.org/guide/migration/global-api.html#vue-prototype-%E6%9B%BF%E6%8D%A2%E4%B8%BA-config-globalproperties
  app.config.globalProperties.$message = ElMessage
  app.config.globalProperties.$notify = ElNotification
  app.config.globalProperties.$confirm = ElMessageBox.confirm
  app.config.globalProperties.$alert = ElMessageBox.alert
  app.config.globalProperties.$prompt = ElMessageBox.prompt

  app.config.globalProperties.$ELEMENT = {
    size: 'medium'
  }
}

export default element
