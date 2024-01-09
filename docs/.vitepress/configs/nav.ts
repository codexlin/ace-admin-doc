import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  // 表示docs/index.md
    {  text: '首页',  link: '/' },
    { text: 'Examples', link: '/markdown-examples' },
    {
      text: '关于我',
      items: [
        { text: 'Github', link: 'https://github.com/Jacqueline712' },
        {
          text: '掘金',
          link: 'https://juejin.cn/user/3131845139247960/posts'
        },
        {
          text: '博客园',
          link: 'https://pzfqk98jn1.feishu.cn/wiki/space/7193915595975491587?ccm_open_type=lark_wiki_spaceLink'
        }
      ]
    }
]