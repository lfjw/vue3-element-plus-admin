import type { App } from 'vue'
import {
  locale,
  ElButton
} from 'element-plus'

import 'element-plus/lib/theme-chalk/index.css'

import lang from 'element-plus/lib/locale/lang/zh-cn'

import 'dayjs/locale/zh-cn'

const element = (app: App): void => {
  locale(lang)

  // 按需导入组件列表
  const components = [
    ElButton
  ]

  components.forEach(component => {
    app.component(component.name, component)
  })

  app.config.globalProperties.$ELEMENT = {
    size: 'medium'
  }
}

export default element
