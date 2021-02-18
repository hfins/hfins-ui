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
      title: '开发指引',
      path: '/development-guide',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/hfins/hfins-ui',
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
    '/development-guide': [
      {
        title: 'mobx介绍',
        path: '/development-guide/mobx',
        children: [
          {
            title: 'mobx要点',
            path: '/development-guide/mobx/overview',
          },
          {
            title: '概念与原则',
            path: '/development-guide/mobx/concepts',
          },
        ],
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
