
import type { createApp } from 'vue'

import element from './element'
import elementIcon from './elementIcon'

export default function loadAllPlugins(app: ReturnType<typeof createApp>) {
  app.use(element)
  app.use(elementIcon)
}
