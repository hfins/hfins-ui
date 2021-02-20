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
      title: '前端开发基础',
      path: '/basic-knowledge',
    },
    {
      title: '通用utils',
      path: '/utils',
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
      {
        title: 'ModifyExchangeRateButton',
        path: '/components/modify-exchange-rate-button',
      },
    ],
    '/basic-knowledge': [
      {
        title: 'mobx',
        path: '/basic-knowledge/mobx',
        children: [
          {
            title: 'mobx要点',
            path: '/basic-knowledge/mobx/overview',
          },
          {
            title: '概念与原则',
            path: '/basic-knowledge/mobx/concepts',
          },
        ],
      },
    ],
    '/utils': [
      {
        title: 'HecUtil',
        path: '/utils/hec-util',
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
