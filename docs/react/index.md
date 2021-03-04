---
title: react核心概念
order: 1
toc: menu
nav:
  title: 前端开发基础
  order: 2
---
## 从Hello World开始

### 将一个元素渲染为DOM

假设你的 HTML 文件某处有一个`<div>`：

```jsx | pure
<div id="root" />
```

仅使用`React`构建的应用通常只有一个唯一的根`DOM`节点。

### 将一个`React`元素渲染到根`DOM`节点中
```tsx | pure
const element = <h1>Hello, world!</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

它将在页面上展示一个`"Hello, world!"`的标题。

## 组件 & Props

### 函数组件和class组件

- 函数组件

```tsx | pure
import React from 'react';

interface WelcomeProps {
  name: string;
}

const Welcome: React.FC<WelcomeProps> = ({ name }) => (
  <h1>Hello, {name}</h1>
);

export default Welcome;
```

- class组件

```tsx | pure
import React, { Component } from 'react';

interface WelcomeProps {
  name: string;
}

class Welcome extends Component<WelcomeProps> {
  
  render() {
    const { name } = this.props;
    
    return (
      <h1>Hello, {name}</h1>
    );
  }
}
```

### 组合组件

组件可以在其输出中引用其他组件。这就可以让我们用同一组件来抽象出任意层次的细节。按钮，表单，对话框，甚至整个屏幕的内容：在`React`应用程序中，这些通常都会以组件的形式表示。

```tsx
import React from 'react';

interface WelcomeProps {
  name: string;
}

const Welcome: React.FC<WelcomeProps> = ({ name }) => (
  <h1>Hello, {name}</h1>
);

const App: React.FC = () => (
  <div>
    <Welcome name="hfins" />
    <Welcome name="hfins" />
    <Welcome name="hfins" />
  </div>
);

export default () => <App />
```

### Props的只读性

组件无论是使用`函数声明还是通过class声明`，都决不能修改自身的`props`。

- 纯函数

```ts | pure
function sum(a, b) {
  return a + b;
}
```
因为该函数不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果，所以被称为**纯函数**。

相反，下面的函数则不是纯函数，因为他更改了自己的入参：

```ts | pure
function withdraw(account, amount) {
  account.total -= amount;
}
```

React非常灵活，单它也有一个严格的规则：
**所有`React`组件都必须像纯函数一样保护它们的`props`不被更改。**
当然，应用程序的UI是动态的，并会伴随着时间的推移而变化。下面，我们将介绍一种新的概念，称之为`state`。在不违反上述原则的情况下，`state`允许
React组件随用户操作、网络响应或者其他变化而动态更改输出内容。

## State & 生命周期

我们先来看一个时钟组件
```tsx
import React, { Component, ComponentProps } from 'react';

interface ClockState {
  date: Date;
}

class Clock extends Component<ComponentProps, ClockState> {
  
  state: ClockState;
  timerID: number | undefined = undefined;

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  
  render() {
    const { date } = this.state;
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export default () => <Clock />

```

### 正确使用State

- **不要直接修改State**

```tsx | pure
// Wrong
this.state.comment = 'Hello';

// Correct
this.setState({
  comment: 'Hello',
});
```

注意，构造函数是唯一可以给`this.state`赋值的地方。

- **State的更新可能是异步的**

出于性能考虑，React可能会把多个`setState()`调用合并成一个调用。因为`this.props`和`this.state`可能会异步更新，所以不要依赖他们的值来更新下一个状态。

```tsx | pure
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});

// Correct
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

// Correct
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});

```

- **State的更新会被合并**

当调用`setState()`的时候，React会把你提供的对象合并到当前的State。

例如，你的state包含几个独立的变量，然后你可以分别调用`setState()`来单独地更新它们：

```tsx | pure
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }

componentDidMount() {
  fetchPosts().then(response => {
    this.setState({
      posts: response.posts
    });
  });

  fetchComments().then(response => {
    this.setState({
      comments: response.comments
    });
  });
}
```

<font color="red">注意：这里的合并是浅合并，所以`this.setState({comments})`完整保留了`this.state.posts`， 但是完全替换了`this.state.comments`。</font>

### 数据是向下流动的

不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是class组件。

这就是为什么称 state 为局部的或是封装的的原因。除了拥有并设置了它的组件，其他组件都无法访问。

组件可以选择把它的 state 作为 props 向下传递到它的子组件中：

```tsx | pure
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
```

这对于自定义组件同样适用：

```tsx | pure
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
<FormattedDate date={this.state.date} />
```

`FormattedDate`组件会在其`props`中接收参数`date`，但是组件本身无法知道它是来自于`Clock`的`state`，或是`Clock`的`props`，还是手动输入的。

这通常会被叫做“自上而下”或是“单向”的数据流。任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。

如果你把一个以组件构成的树想象成一个 props 的数据瀑布的话，那么每一个组件的 state 就像是在任意一点上给瀑布增加额外的水源，但是它只能向下流动。
