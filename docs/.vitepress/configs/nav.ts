import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  // 表示docs/index.md
    {  text: '首页',  link: '/' },
    {
      text: '项目介绍',
      items: [
        {
          text: '简介',
          link: '/md/introduction/' // 对应docs/column/Algorithm下的idnex.md文件
        },
        {
          text: '介绍1',
          link: '/md/introduction/i1' // 对应docs/column/Algorithm下的idnex.md文件
        },
        {
          text: '介绍2',
          link: '/md/introduction/i2' // 对应docs/column/Algorithm下的idnex.md文件
        }
      ]
    },
    { text: '使用文档', link: '/md/documentation/' },
    {
      text: '关于我',
      items: [
        { text: 'Github', link: 'https://github.com/xoxosos' },
        {
          text: '博客园',
          link: 'https://www.cnblogs.com/pglin/'
        }
      ]
    }
]