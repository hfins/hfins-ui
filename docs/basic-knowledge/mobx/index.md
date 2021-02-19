---
title: mobx介绍
nav:
  title: basic-knowledge
  path: /basic-knowledge
---

## 核心概念

`React`和`MobX`是一对强力组合。`React`通过提供机制把应用状态转换为可渲染组件树并对其进行渲染。而`MobX`提供机制来存储和更新应用状态供`React`使用。

### Observable state(可观察的状态)

MobX 为现有的数据结构(如对象，数组和类实例)添加了可观察的功能。通过使用 @observable 装饰器(ES.Next)来给你的类属性添加注解就可以简单地完成这一切.

```tsx | pure
import { observable } from "mobx";

class Todo {
  id = Math.random();
  @observable title = "";
  @observable finished = false;
}
```

### Computed values(计算值)

使用 MobX， 你可以定义在相关数据发生变化时自动更新的值。 通过@computed 装饰器或者利用 (extend)Observable 时调用 的getter / setter 函数来进行使用。(当然，这里也可以再次使用 decorate 来替代 @ 语法)。

```tsx | pure
import { observable, computed } from 'mobx';

class TodoList {
  @observable todos = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}
```

当添加了一个新的todo或者某个todo的`finished`属性发生变化时，MobX会确保`unfinishedTodoCount`自动更新。 只有在需要它们的时候，它们才会自动更新。

### React组件

如果你用`React`的话，可以把你的(无状态函数)组件变成响应式组件，方法是在组件上添加`observer`函数/ 装饰器. `observer`由`mobx-react`包提供的。

<code src="./demo/TodoList"></code>

### Reactions(反应)

`Reactions`和计算值很像，但它不是产生一个新的值，而是会产生一些副作用，比如打印到控制台、网络请求、递增地更新`React`组件树以修补DOM等等。 简而言之，`reactions`在`响应式编程`和`命令式编程`之间建立沟通的桥梁。

```tsx | pure
import { autorun } from 'mobx';
autorun(() => {
    console.log("Tasks left: " + todos.unfinishedTodoCount)
})
```
`MobX`会对在执行跟踪函数期间读取的任何现有的可观察属性做出反应，每次`unfinishedTodoCount`变化时都会打印一条新消息。
