import { defineConfig } from 'vitepress'
import { nav, sidebar } from './configs'
const logo = '/logo.svg' // 表示docs/public/avartar.png
const title = "Ace Admin Doc"
const description = "A VitePress Site"
export default defineConfig({
  title,
  description,
  head: [
    ['link', { rel: 'icon', href: '/logo.svg',type: 'image/svg+xml' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
    ]
  ],
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
      { icon: 'github', link: 'https://github.com/xoxosos/vue-ace-admin' }
    ],
  }
})
