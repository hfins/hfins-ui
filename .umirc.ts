import { defineConfig } from 'dumi';

export default defineConfig({
  title: '智享财务',
  outputPath: 'docs-dist',
  logo: '/hfins-ui/images/logo.svg',
  favicon: '/hfins-ui/images/logo.svg',
  mode: 'site',
  alias: {
    '@common': 'hfins-ec-front-common/lib',
  },
  base: '/hfins-ui',
  publicPath: '/hfins-ui/',
  navs: [
    {
      title: '组件',
      path: '/components',
    },
    {
      title: 'mobx的使用',
      path: '/mobx',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/twtyjvkg/hfins-ui',
    },
  ],
  menus: {
    '/components': [
      {
        title: 'Icons-图标',
        path: '/components/icons',
      },
      {
        title: 'ModalLov-自定义lov',
        path: '/components/modal-lov',
      },
      {
        title: 'QueryBarMoreUse-查询头',
        path: '/components/query-bar-more',
      },
    ],
    '/mobx': [
      {
        title: 'mobx介绍',
        path: '/mobx',
        children: [
          {
            title: 'mobx要点',
            path: '/mobx/overview',
          },
          {
            title: '概念与原则',
            path: '/mobx/concepts',
          },
        ],
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
