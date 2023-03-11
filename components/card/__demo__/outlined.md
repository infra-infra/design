---
order: 2
title: Outlined card
---

一个基本的评论组件，带有作者、头像、时间和操作。

```js
import React from 'react';
import { Card, Button } from '@oc/design';

const App = () => {
  return (
    <div className="card-container">
      <Card variant="outlined">
        <h3>卡片</h3>
        <Button>click</Button>
      </Card>
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
