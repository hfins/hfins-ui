---
title: react核心概念
order: 1
toc: menu
nav:
  title: 前端开发基础
  order: 2
---

## 函数组件和class组件

- 函数组件

```tsx | pure
import React from 'react';

interface WelcomeProps {
  name: string;
}

const Welcome: React.FC = ({ name }) => (
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

