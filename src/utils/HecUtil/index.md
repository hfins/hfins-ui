---
title: HecUtil
nav:
  title: 通用utils
  path: /utils
---

## 基础运算

### mul（乘法）

```tsx
import React, { useState } from 'react';
import { NumberField, Currency, Form } from 'choerodon-ui/pro';
import HecUtil from '@common/utils/HecUtil';

const MulDemo: React.FC = () => {
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <Form columns={3}>
      <Currency value={price} onChange={value => { setPrice(value) }} label="单价" />
      <NumberField value={quantity} onChange={value => { setQuantity(value) }} label="数量" />
      <Currency value={HecUtil.mul(price, quantity)} label="总金额" readOnly />
    </Form>
  );
}

export default () => <MulDemo />;
```

### div（除法）

```tsx
import React, { useState } from 'react';
import { NumberField, Currency, Form } from 'choerodon-ui/pro';
import HecUtil from '@common/utils/HecUtil';

const DivDemo: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <Form columns={3}>
      <Currency
        value={amount}
        onChange={value => { setAmount(value) }}
        label="总金额"
      />
      <NumberField
        value={quantity}
        onChange={value => { setQuantity(value) }}
        validator={value => {
          if (value <= 0) return Promise.resolve('数量应该大于0');
          return Promise.resolve(true);
        }}
        label="数量" />
      <Currency value={quantity > 0 ? HecUtil.div(amount, quantity) : undefined} label="单价" readOnly />
    </Form>
  );
}

export default () => <DivDemo />;
```

### plus（加法）

```tsx
import React, { useState } from 'react';
import { Currency, Form } from 'choerodon-ui/pro';
import HecUtil from '@common/utils/HecUtil';

const PlusDemo: React.FC = () => {
  const [withoutTaxAmount, setWithoutTaxAmount] = useState<number>(0);
  const [taxAmount, setTaxAmount] = useState<number>(0);
  return (
    <Form columns={3}>
      <Currency
        value={withoutTaxAmount}
        onChange={value => { setWithoutTaxAmount(value) }}
        label="金额"
      />
      <Currency
        value={taxAmount}
        onChange={value => { setTaxAmount(value) }}
        label="税额" />
      <Currency value={HecUtil.plus(withoutTaxAmount, taxAmount)} label="价税合计" readOnly />
    </Form>
  );
}

export default () => <PlusDemo />;
```

### minus（减法）

```tsx
import React, { useState } from 'react';
import { Currency, Form } from 'choerodon-ui/pro';
import HecUtil from '@common/utils/HecUtil';

const MinusDemo: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [taxAmount, setTaxAmount] = useState<number>(0);
  return (
    <Form columns={3}>
      <Currency
        value={amount}
        onChange={value => { setAmount(value) }}
        label="价税合计"
      />
      <Currency
        value={taxAmount}
        onChange={value => { setTaxAmount(value) }}
        label="税额" />
      <Currency value={HecUtil.minus(amount, taxAmount)} label="不含税金额" readOnly />
    </Form>
  );
}

export default () => <MinusDemo />;
```

### pow（乘方）

```tsx
import React, { useState } from 'react';
import { NumberField, Form } from 'choerodon-ui/pro';
import HecUtil from '@common/utils/HecUtil';

const PowDemo: React.FC = () => {
  const [a, setA] = useState<number>(0);
  const [x, setX] = useState<number>(0);
  return (
    <Form columns={3}>
      <NumberField
        value={a}
        onChange={value => { setA(value) }}
        label="底数"
      />
      <NumberField
        value={x}
        onChange={value => { setX(value) }}
        label="指数" />
      <NumberField value={HecUtil.pow(a, x)} label="结果" readOnly />
    </Form>
  );
}

export default () => <PowDemo />;
```

## 财务计算

### calAmount（计算金额）

```tsx
import React, { useState } from 'react';
import { NumberField, Currency, Form } from 'choerodon-ui/pro';
import HecUtil from '@common/utils/HecUtil';

const CalAmountDemo: React.FC = () => {
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [precision, setPrecision] = useState<number>(2);
  return (
    <Form columns={4}>
      <Currency value={price} onChange={value => { setPrice(value) }} label="单价" />
      <NumberField value={quantity} onChange={value => { setQuantity(value) }} label="数量" />
      <NumberField value={precision} onChange={value => { setPrecision(value) }} label="精度" />
      <Currency value={HecUtil.calAmount(price, quantity, precision)} label="总金额" readOnly />
    </Form>
  );
}

export default () => <CalAmountDemo />;
```

参数 | 说明 | 类型 | 默认值
-----|-----|-----|------
price | 单价 | number | 0
quantity | 数量 | number | 0
precision | 精度 | number | 0

### calExchangeAmount（汇率换算）

```tsx
import React, { useState } from 'react';
import { NumberField, Currency, Form } from 'choerodon-ui/pro';
import HecUtil from '@common/utils/HecUtil';

const CalExchangeAmountDemo: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [precision, setPrecision] = useState<number>(2);
  return (
    <Form columns={4}>
      <Currency value={amount} onChange={value => { setAmount(value) }} label="金额" />
      <NumberField value={rate} onChange={value => { setRate(value) }} label="汇率" />
      <NumberField value={precision} onChange={value => { setPrecision(value) }} label="精度" />
      <Currency value={HecUtil.calExchangeAmount(amount, rate, precision)} label="换算结果" readOnly />
    </Form>
  );
}

export default () => <CalExchangeAmountDemo />;
```

参数 | 说明 | 类型 | 默认值
-----|-----|-----|------
amount | 金额 | number | -
rate | 汇率 | number | -
precision | 精度 | number | -

### calTaxAmount（税额计算）

```tsx
import React, { useState } from 'react';
import { NumberField, Currency, Select, Form } from 'choerodon-ui/pro';
import HecUtil from '@common/utils/HecUtil';

const CalTaxAmountDemo: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [taxRate, setTaxRate] = useState<number>(0);
  const [taxCategory, setTaxCategory] = useState<'TAX_EXCLUSIVE_PRICE' | 'TAX_INCLUSIVE_PRICE'>('TAX_INCLUSIVE_PRICE');
  const [precision, setPrecision] = useState<number>(2);
  return (
    <Form columns={5}>
      <Currency value={amount} onChange={value => { setAmount(value) }} label="金额" />
      <NumberField value={taxRate} onChange={value => { setTaxRate(value) }} label="税率" />
      <Select
        placeholder="请选择税种"
        primitiveValue={false}
        value={taxCategory}
        onChange={({ value }) => { setTaxCategory(value) }}
      >
        <Select.Option value="TAX_INCLUSIVE_PRICE">金额含税</Select.Option>
        <Select.Option value="TAX_EXCLUSIVE_PRICE">金额不含税</Select.Option>
      </Select>
      <NumberField value={precision} onChange={value => { setPrecision(value) }} label="精度" />
      <Currency value={HecUtil.calTaxAmount(amount, taxRate, taxCategory, precision)} label="税额" readOnly />
    </Form>
  );
}

export default () => <CalTaxAmountDemo />;
```

参数 | 说明 | 类型 | 默认值
-----|-----|-----|------
amount | 金额 | number | -
taxRate | 税率 | number | -
taxCategory | 税种 | one of ['TAX_EXCLUSIVE_PRICE', 'TAX_INCLUSIVE_PRICE'] | -
precision | 精度 | number | -


### calWithOutTaxAmount（不含税金额计算）

```tsx
import React, { useState } from 'react';
import { NumberField, Currency, Select, Form } from 'choerodon-ui/pro';
import HecUtil from '@common/utils/HecUtil';

const CalWithOutTaxAmountDemo: React.FC = () => {
  const [withoutTaxAmount, setWithoutTaxAmount] = useState<number>(0);
  const [taxRate, setTaxRate] = useState<number>(0);
  const [taxCategory, setTaxCategory] = useState<'TAX_EXCLUSIVE_PRICE' | 'TAX_INCLUSIVE_PRICE'>('TAX_INCLUSIVE_PRICE');
  const [precision, setPrecision] = useState<number>(2);
  return (
    <Form columns={5}>
      <Currency value={withoutTaxAmount} onChange={value => { setWithoutTaxAmount(value) }} label="不含税金额" />
      <NumberField value={taxRate} onChange={value => { setTaxRate(value) }} label="税率" />
      <Select
        placeholder="请选择税种"
        primitiveValue={false}
        value={taxCategory}
        onChange={({ value }) => { setTaxCategory(value) }}
      >
        <Select.Option value="TAX_INCLUSIVE_PRICE">金额含税</Select.Option>
        <Select.Option value="TAX_EXCLUSIVE_PRICE">金额不含税</Select.Option>
      </Select>
      <NumberField value={precision} onChange={value => { setPrecision(value) }} label="精度" />
      <Currency value={HecUtil.calWithOutTaxAmount(withoutTaxAmount, taxRate, taxCategory, precision)} label="不含税金额" readOnly />
    </Form>
  );
}

export default () => <CalWithOutTaxAmountDemo />;
```

参数 | 说明 | 类型 | 默认值
-----|-----|-----|------
amount | 金额 | number | -
taxRate | 税率 | number | -
taxCategory | 税种 | one of ['TAX_EXCLUSIVE_PRICE', 'TAX_INCLUSIVE_PRICE'] | -
precision | 精度 | number | -

## renderAmountWithPrecision（根据精度渲染金额）

```tsx
import React, { useState } from 'react';
import { NumberField, Currency, Form } from 'choerodon-ui/pro';
import HecUtil from '@common/utils/HecUtil';

const RenderAmountWithPrecisionDemo: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [precision, setPrecision] = useState<number>(2);
  return (
    <Form columns={3}>
      <NumberField value={precision} onChange={value => { setPrecision(value) }} label="精度" />
      <Currency 
        value={HecUtil.calAmount(amount, 1, precision)}
        renderer={({ value }) => HecUtil.renderAmountWithPrecision(amount, precision)}
        onChange={value => { setAmount(value) }}
        label="金额"
      />
    </Form>
  );
}

export default () => <RenderAmountWithPrecisionDemo />;
```

参数 | 说明 | 类型 | 默认值
-----|-----|-----|------
amount | 金额 | number | -
precision | 精度 | number | 2



