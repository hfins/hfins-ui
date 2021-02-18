---
nav:
  title: Components
  path: /components
---

## QueryBarMore

<code src="./demo/QueryBarMoreUse"></code>

## 组件描述

该组件主要应用于查询页面作为查询头使用。

## API

| 属性              | 说明             | 类型                     | 默认值 | 必输性 |
| ----------------- | ---------------- | ------------------------ | ------ | ------ |
| queryFieldsConfig | 查询字段         | FieldProps[]或 undefined | -      | N      |
| buttons           | 按钮             | Buttons[]                | -      | N      |
| queryFieldsLimit  | 查询字段每行个数 | number                   | 3      | N      |
| dataSet           | 数据源           | DataSet                  | -      | Y      |
| queryDataSet      | 查询数据源       | DataSet                  | -      | N      |
