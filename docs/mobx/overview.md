---
title: mobx介绍-mobx要点
nav:
  title: mobx
  path: /mobx
---

## 1. 定义状态并使其可观察

可以用任何你喜欢的数据结构来存储状态，如对象、数组、类。 循环数据结构、引用都没有关系。 只要确保所有会随时间流逝而改变的属性打上`mobx`的标记使它们变得可观察即可。

```tsx | pure
import { observable } from 'mobx';

const appState = observable({
    timer: 0
});
```

## 2. 创建视图以响应状态的变化

我们的`appState`还没有观察到任何的东西。 你可以创建视图，当`appState`中相关数据发生改变时视图会自动更新。`MobX`会以一种最小限度的方式来更新视图。 事实上这一点可以节省了你大量的样板文件，并且它有着令人匪夷所思的高效。

通常来说，任何函数都可以成为可以观察自身数据的响应式视图，`MobX`可以在任何符合ES5的JavaScript环境中应用。 但是在这所用的示例是`ES6`版本的`React`组件视图。
