---
nav:
  title: Components
  path: /components
---

## 附件上传

```tsx | pure
import React from 'react';
import Upload from '@common/components/Upload';
import Icons from '@common/components/Icons';

export default () => (
  <Upload>
    <a>
      <Icons type="attachment" size={16} />
    </a>
  </Upload>
)
```

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
uploadUrl | 上传地址 | string | -
deleteUrl | 删除地址 | string | -
downloadUrl | 下载地址 | string | -
disabled | 禁用 | boolean | -
title | 标题 | string | -

更多属性详见[c7n-UI](https://open-hand.gitee.io/choerodon-ui/zh/cmp/data-entry/file-upload#API)
