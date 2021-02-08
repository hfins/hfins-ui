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
      title: 'GitHub',
      path: 'https://github.com/twtyjvkg/hfins-ui',
    }
  ],
  menus: {
    '/components': [
      {
        title: 'Icons-图标',
        path: '/components/icons'
      },
      {
        title: 'ModalLov-自定义lov',
        path: '/components/modal-lov'
      }
    ]
  }
  // more config: https://d.umijs.org/config
});
