import { defineConfig } from 'dumi';

export default defineConfig({
  title: '智享财务',
  outputPath: 'docs-dist',
  logo: '/images/logo.svg',
  favicon: '/images/logo.svg',
  mode: 'site',
  alias: {
    '@common': 'hfins-ec-front-common/lib',
  },
  base: '/hfins-ui',
  publicPath: '/hfins-ui/',
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/hfins/hfins-ui',
    },
  ],
  // more config: https://d.umijs.org/config
});
