import { defineConfig } from 'vitepress'
import en from './locales/en'
import zh from './locales/zh'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Magic Docs",
  description: "The New Generation Enterprise-level AI Application Innovation Engine",
  locales: {
    root: en,
    zh: zh
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dtyq/magic' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3, 4], // 显示 h2-h4 标题
      // 或者使用
      // level: '2-4',   // 另一种写法
      depth: 3          // 设置深度为 3
    }
  }
}) 