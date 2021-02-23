---
nav:
  title: Components
  path: /components
---

## ModiFyExchangeRateButton-修改凭证汇率按钮

### 使用案例
```tsx | pure
 <ModifyExchangeRateButton
  color={ButtonColor.primary}
  funcType={FuncType.flat}
  accountDs={this.accountGridDs}
  modalParameters={{
    queryUrl: `/acp/invoice-account/adjust-exchange/record?invoiceHeaderId=${invoiceHeaderId}`,
    submitUrl: '/acp/invoice-account/adjust-exchange',
  }}
/>
```

## 组件描述

修改凭证汇率按钮，现在主要应用于总账报账单审核，应付发票审核等功能。

## API

| 属性              | 说明             | 类型                     | 默认值 | 必输性 |
| ----------------- | ---------------- | ------------------------ | ------ | ------ |
| modalParameters | 包含queryUrl 和 submitUrl         | Object {queryUrl:'',submitUrl:''} | -      | Y     |
| accountDs           | 凭证DS             | DataSet             | -      | Y   |
| funcType  | 基于ButtonProps的属性，按钮展现形式 | FuncType                   | -     | N      |
| color           | 基于ButtonProps的属性，按钮颜色           | ButtonColor                  | -      | N    |
