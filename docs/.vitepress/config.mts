import { defineConfig } from 'vitepress'
import { nav, sidebar } from './configs'
const logo = '/logo.svg' // 表示docs/public/avartar.png
const title = "Ace Admin Doc"
const description = "A VitePress Site"
export default defineConfig({
  title,
  description,
  themeConfig: {
    i18nRouting: false,
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    logo, 
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
