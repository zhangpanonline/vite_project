import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import '@/assets/variables.css'
import type { createApp } from 'vue'
import useAppStore from '@/stores/app'

export default (app: ReturnType<typeof createApp>) => {
  app.use(ElementPlus, { size: useAppStore().size })
}

// Element Plus 中的样式架构
// ├── packages
// │   ├── theme-chalk
// │   │   ├── src
// │   │   │   ├── common
// │   │   │   │   └── var.scss // SCSS 变量配置文件
// │   │   │   ├── mixins
// │   │   │   │   ├── _var.scss // CSS 变量相关的 SCSS 自定义函数
// │   │   │   │   ├── config.scss // 配置文件
// │   │   │   │   ├── function.scss // 全局的 SCSS 自定义函数
// │   │   │   │   └── mixins.scss  // BEM 相关函数
// │   │   │   ├── base.scss // 基础必须要引用的文件
// │   │   │   ├── index.scss // 全量导入组件库的 CSS 入口文件
// │   │   │   ├── var.scss   // CSS 变量配置文件
// │   │   │   ├── reset.scss // 默认样式重置配置文件
// │   │   │   ├── button.scss // 按需导入组件的 CSS 文件
// │   │   └── package.json // 主题包的 npm 配置文件

// BEM 规范下 classname 的命名格式为：
// block-name__<element-name>--<modifier-name>_<modifier_value>
// 所有实体的命名均使用小写字母，复合词使用连字符 “-” 连接。
// Block 与 Element 之间使用双下画线 “__” 连接。
// Mofifier 与 Block/Element 使用双连接符 “--” 连接。
// modifier-name 和 modifier_value 之间使用单下画线 “_” 连接。
