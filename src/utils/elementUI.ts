import type { App } from 'vue'

// 完整引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 将 ElementPlus UI 库挂载到 Vue 应用上
export default function mountElementUI(app: App<Element>) {
  app.use(ElementPlus, { locale: zhCn })
}
