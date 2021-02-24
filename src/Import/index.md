---
title: Import 
toc: menu 
nav:
  title: Components 
  path: /components 
  order: 2
---

## 示例

### 配置路由

> `：code`：路由占位符，通常为 `H0` 导入模板代码

```javascript | pure
{
  path: '/',
    components: [
    {
      path: 'import-data/:code',
      component: () => import('@common/components/himp/CommentImport'),
    }
  ]
}
```

### 代码示例

> `onBeforeMenuTabRemove` `MenuTab` 移除回调，返回 `false` 不关闭、返回 `true` 关闭

```tsx | pure
import React from 'react';
import CommonImport from '@common/components/CommonImport';

export default () => {

  const handleImport = () => {
    const key = '/import-data/HFINS.IMPORT_TEMPLATE';
    openTab({
      key,
      title: intl.get('hfins.dataimport.data'),
      search: queryString.stringify({
        prefixPath: commonConfig.HSSP_API,
        action: intl.get('hfins.dataimport.data'),
      }),
    });
    onBeforeMenuTabRemove(key, () => {
      return true;
    });
  }
}
```

- 含参导入

> 增加 `args` 属性，将需传递的数据以对象方式注入，后端反序列化 `args` 对象即可

```tsx | pure
import React from 'react';
import CommonImport from '@common/components/CommonImport';

export default () => {

  const handleImport = () => {
    openTab({
      search: queryString.stringify({
        args: JSON.stringify({ "id": id })
      }),
    });
  }
}
```

## API

