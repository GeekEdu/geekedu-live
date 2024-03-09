import type { App } from 'vue'

// 完整引入
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

// 将 Antd 库挂载到 Vue 应用上
export default function mountElementUI(app: App<Element>) {
  app.use(Antd)
}
