---
nav:
  title: Components
  path: /components
---

## ModalLov

```tsx
import React from 'react';
import { DataSet, Form, Modal, NumberField, TextField } from 'choerodon-ui/pro';
import ModalLov from '@common/config/customize/pageElements/report/components/ModalLov';
import { FieldType } from 'choerodon-ui/pro/lib/data-set/enum';
// 项目中不需要引入下面的样式文件
import 'choerodon-ui/dist/choerodon-ui.css';
import 'choerodon-ui/dist/choerodon-ui-pro.css';

export default () => {
  const handleClickModalLov = () => {
    Modal.open({
      title: 'ModalLov',
      movable: false,
      closable: true,
      footer: null,
      children: <div>ModalLov</div>,
      onOk: () => {
        console.log();
      },
    });
  };
  const ds = new DataSet({
    fields: [
      {
        name: 'name',
        type: 'string',
        label: '名字',
      },
      {
        name: 'age',
        type: 'number',
        label: '年龄',
      },
      {
        name: 'hobby',
        type: 'string',
        label: '爱好',
      },
    ],
    data: [{ name: 'peter', age: 18, hobby: 'football' }],
    autoCreate: true,
  });
  return (
    <Form dataSet={ds}>
      <TextField name="name" />
      <NumberField name="age" />
      <ModalLov
        name="hobby"
        sourceRecord={ds.current}
        handleModalLovClick={() => handleClickModalLov()}
      />
    </Form>
  );
};
```

## API

使用 `<ModalLov />` 标签声明组件，绑定数据来源之后，可以帮助我们对数据进行类似 LOV 组件的处理，优势在于更加灵活，我们的对数据的可操作性更高。

| 属性                | 说明            | 类型    | 默认值 | 必输 |
| ------------------- | --------------- | ------- | ------ | ---- |
| name                | 字段名          | String  | -      | N    |
| sourceDataSet       | 数据来源 DS     | DataSet | -      | N    |
| clearButton         | 清除标识        | Boolean | false  | N    |
| sourceRecord        | 数据来源 Record | Record  | -      | N    |
| readOnly            | 是否只读        | Boolean | false  | N    |
| handleModalLovClick | 点击事件        | Funtion | -      | N    |
