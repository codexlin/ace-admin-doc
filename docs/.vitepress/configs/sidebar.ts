import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  // /column/Introduction/表示对这个文件夹下的所有md文件做侧边栏配置
  '/md/introduction/': [
    {
      text: '简介',
      link: '/md/introduction/'
    },
     // 第一部分
    {
      text: '介绍1',
      items: [
        {
          text: '介绍1-1',
          link: '/md/introduction/i1'
        }
      ]
    },
    // 第二部分
    {
      text: '介绍2',
      items: [
        {
            text: '介绍2-2',
            link: '/md/introduction/i2'
          }
      ]
    }
  ]
}