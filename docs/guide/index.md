---
title: 快速上手
order: 1
nav:
  title: 指南
  order: 1
---

## 模块列表

模块代码 | 模块名称 | 说明
-----|-----|-----
hfins-ec-front-common | 通用 | 包含通用组件、工具方法、页面元素等所有模块公用资源

## 环境准备

### 常用软件

软件 | 用途 | 说明
-----|-----|-----
[git](https://git-scm.com/) | git操作 | 
[nodejs](https://nodejs.org/en/) | js运行环境 | 

### 全局依赖安装

```shell
# 安装yarn
npm install -g yarn
# hzero-cli、eslint
yarn global add hzero-cli eslint --registry=http://nexus.saas.hand-china.com/content/groups/hzero-npm-group/
```

执行`yarn global bin`查看yarn的bin目录，将其添加到`path`环境变量中。（<font color="red">如果提示hzero-cli命令找不到请执行该步骤</font>）

![image.png](/hfins-ui/images/docs/guide/QQ截图20210223171956.jpg)


![image.png](/hfins-ui/images/docs/guide/QQ截图20210223172046.jpg)

### git配置（在项目根目录下配置）

```shell
# 设置用户名和密码
git config user.name "xuzhao"
git config user.email "zhao.xu@hand-china.com"
# 设置大小写敏感
git config core.ignorecase false
```

## 开发调试

### 新增子模块

```shell
npx hzero-cli g sub-module xuzhao
```

![image.png](/hfins-ui/images/docs/guide/QQ截图20210223172410.jpg)

### 环境变量设置
```yaml

# 环境变量配置, src/config/.env.yml

BASE_PATH: ${BASE_PATH:/}
PLATFORM_VERSION: SASS
CLIENT_ID: ${CLIENT_ID:localhost}
GENERATE_SOURCEMAP: false
SKIP_TS_CHECK_IN_START: false # yarn start 时, 是否跳过 ts 语法检查
SKIP_ESLINT_CHECK_IN_START: true # yarn start 时, 是否跳过 eslint 语法检查
SKIP_NO_CHANGE_MODULE: false # 是否跳过未变更的子模块编译

API_HOST: http://172.23.16.139:8080 # 后端网关地址
NO_PROXY: true

WEBSOCKET_HOST: ws://172.23.16.139:8080/hpfm/websocket # websocket地址，ip地址和网关保持一致
IM_ENABLE: ${IM_ENABLE:false}
IM_WEBSOCKET_HOST: ${IM_WEBSOCKET_HOST:ws://192.168.16.150:9876}
TRACE_LOG_ENABLE: ${TRACE_LOG_ENABLE:true} # // TraceLog日志追溯分析是否启用，true/false
CUSTOMIZE_ICON_NAME: ${CUSTOMIZE_ICON_NAME:hfins-ec-icon}
MULTIPLE_SKIN_ENABLE: true # UED配置是否启用，true/false
```

### 编译运行项目

#### 全量编译

```shell
yarn build
# 需要全模块启动时执行
yarn start
```

#### 增量编译
```shell
yarn build:ms hssp-front-xuzhao
```

#### 子模块调试
```shell
# 在子模块根目录下执行
yarn start
```
