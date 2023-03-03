import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { createApp } from 'vue'

export default (app: ReturnType<typeof createApp>) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
