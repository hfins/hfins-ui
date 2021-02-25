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
    null,
    { title: 'GitHub', path: 'https://github.com/hfins/hfins-ui' },
    {
      title: '国内镜像',
      path: 'https://hfins.gitee.io/hfins-ui',
    },
  ],
  hash: true,
  locales: [['zh-CN', '中文']]
  // more config: https://d.umijs.org/config
});
