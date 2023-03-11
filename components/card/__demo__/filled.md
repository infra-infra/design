---
order: 1
title: Filled card
---

一个基本的评论组件，带有作者、头像、时间和操作。

```js
import React from 'react';
import { Card } from '@oc/design';

const App = () => {
  return (
    <div className="card-container">
      <Card>123123</Card>
    </div>
  );
};

export default App;
```

```css
.card-container {
  background-color: #f2f3f5;
  padding: 20px;
}
```
