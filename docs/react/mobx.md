---
title: mobx的使用
order: 2
toc: menu
nav:
  title: 前端开发基础
---

## 核心概念

`React`和`MobX`是一对强力组合。`React`通过提供机制把应用状态转换为可渲染组件树并对其进行渲染。而`MobX`提供机制来存储和更新应用状态供`React`使用。

### State(状态)

**状态**是驱动应用的数据。 通常有像待办事项列表这样的**领域特定状态**，还有像当前已选元素的**视图状态**。

### Derivations(衍生)

**任何**源自**状态**并且不会再有任何进一步的相互作用的东西就是衍生。衍生以多种形式存在:

- **用户界面**
- **衍生数据**，比如剩下的待办事项的数量。
- **后端集成**，比如把变化发送到服务器端。

`MobX`区分了两种类型的衍生:

- **Computed values(计算值)** - 它们是永远可以使用纯函数(pure function)从当前可观察状态中衍生出的值。
- **Reactions(反应)** - `Reactions`是当状态改变时需要自动发生的副作用。需要有一个桥梁来连接命令式编程(imperative programming)和响应式编程(reactive programming)。或者说得更明确一些，它们最终都需要实现I / O 操作。

如果想**创建一个基于当前状态的值**时，请使用`computed`。

### Actions(动作)

**动作**是任一一段可以改变状态的代码。用户事件、后端数据推送、预定事件等等。

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

使用`MobX`， 你可以定义在相关数据发生变化时自动更新的值。 通过`@computed`装饰器或者利用`(extend)Observable`时调用 的getter / setter 函数来进行使用。(当然，这里也可以再次使用 decorate 来替代 @ 语法)。

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

## 常见操作

### 定义状态并使其可观察

可以用任何你喜欢的数据结构来存储状态，如对象、数组、类。 循环数据结构、引用都没有关系。 只要确保所有会随时间流逝而改变的属性打上`mobx`的标记使它们变得可观察即可。

```tsx | pure
import { observable } from 'mobx';

const appState = observable({
    timer: 0
});
```

### 创建视图以响应状态的变化

我们的`appState`还没有观察到任何的东西。 你可以创建视图，当`appState`中相关数据发生改变时视图会自动更新。`MobX`会以一种最小限度的方式来更新视图。 事实上这一点可以节省了你大量的样板文件，并且它有着令人匪夷所思的高效。

通常来说，任何函数都可以成为可以观察自身数据的响应式视图，`MobX`可以在任何符合ES5的JavaScript环境中应用。 但是在这所用的示例是`ES6`版本的`React`组件视图。

```tsx | pure
import { observer } from 'mobx-react';

@observer
class TimerView extends React.Component {
  
    render() {
        return (
            <button onClick={this.onReset.bind(this)}>
                Seconds passed: {this.props.appState.timer}
            </button>
        );
    }

    onReset() {
        this.props.appState.resetTimer();
    }
};

ReactDOM.render(<TimerView appState={appState} />, document.body);
```

### 更改状态

第三件要做的事就是更改状态。 也就是你的应用究竟要做什么。 不像一些其它框架，`MobX`不会命令你如何如何去做。 这是最佳实践，但关键要记住一点: **MobX帮助你以一种简单直观的方式来完成工作**。

下面的代码每秒都会修改你的数据，而当需要的时候UI会自动更新。 无论是在**改变**状态的控制器函数中，还是在应该**更新**的视图中，都没有明确的关系定义。 使用`observable`来装饰你的**状态**和**视图**，这足以让 MobX检测所有关系了。

```tsx | pure
appState.resetTimer = action(function reset() {
    appState.timer = 0;
});

setInterval(action(function tick() {
    appState.timer += 1;
}), 1000);
```

### React组件

如果你用`React`的话，可以把你的(无状态函数)组件变成响应式组件，方法是在组件上添加`observer`函数/ 装饰器. `observer`由`mobx-react`包提供的。

<code src="./demo/mobx/TodoList"></code>

### Reactions(反应)

`Reactions`和计算值很像，但它不是产生一个新的值，而是会产生一些副作用，比如打印到控制台、网络请求、递增地更新`React`组件树以修补DOM等等。 简而言之，`reactions`在`响应式编程`和`命令式编程`之间建立沟通的桥梁。

```tsx | pure
import { autorun } from 'mobx';
autorun(() => {
    console.log("Tasks left: " + todos.unfinishedTodoCount)
})
```
`MobX`会对在执行跟踪函数期间读取的任何现有的可观察属性做出反应，每次`unfinishedTodoCount`变化时都会打印一条新消息。

## 原则

MobX 支持单向数据流，也就是**动作**改变**状态**，而状态的改变会更新所有受影响的**视图**。

当**状态**改变时，所有**衍生**都会进行**原子级的自动**更新。因此永远不可能观察到中间值。

所有**衍生**默认都是**同步**更新。这意味着**动作**在改变**状态**之后直接可以安全地检查计算值。

**计算值**是**延迟**更新的。任何不在使用状态的计算值将不会更新，直到需要它进行副作用（I / O）操作时。 如果视图不再使用，那么它会自动被垃圾回收。

所有的**计算值**都应该是纯净的。它们不应该用来改变**状态**。

