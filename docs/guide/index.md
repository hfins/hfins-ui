---
title: 介绍
order: 1
toc: menu
nav:
  title: 指南
  order: 1
---

## 模块列表
模块代码 | 模块名称 | 说明
-----|-----|-----
hfins-ec-front-common | 通用 | 包含通用组件、工具方法、页面元素等所有模块公用资源

## 快速上手

### 环境准备

#### 1. 常用软件

软件 | 用途 | 说明
-----|-----|-----
[git](https://git-scm.com/) | git操作 | 
[nodejs](https://nodejs.org/en/) | js运行环境 | 

#### 全局依赖安装

```shell
# 安装yarn
npm install -g yarn
# hzero-cli、eslint
yarn global add hzero-cli eslint --registry=http://nexus.saas.hand-china.com/content/groups/hzero-npm-group/
```

执行`yarn global bin`查看yarn的bin目录，将其添加到`path`环境变量中。（<font color="red">如果提示hzero-cli命令找不到请执行该步骤</font>）

![image.png](/hfins-ui/images/docs/guide/QQ截图20210223171956.jpg)


![image.png](/hfins-ui/images/docs/guide/QQ截图20210223172046.jpg)

#### git配置（在项目根目录下配置）

```shell
# 设置用户名和密码
git config user.name "xuzhao"
git config user.email "zhao.xu@hand-china.com"
# 设置大小写敏感
git config core.ignorecase false
```

### 开发调试

#### 新增子模块

```shell
npx hzero-cli g sub-module xuzhao
```

![image.png](/hfins-ui/images/docs/guide/QQ截图20210223172410.jpg)
