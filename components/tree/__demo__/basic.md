---
order: 0
title: 基础用法
---

一个基本的评论组件，带有作者、头像、时间和操作。

```js
import React from 'react';
import { Tree } from '@oc/design';

const App = () => {
  return (
    <>
      <Tree placeholder="placeholder" />
    </>
  );
};

export default App;
```

```css
.custom-comment-action {
  padding: 0 4px;
  line-height: 24px;
  border-radius: 2px;
  background: transparent;
  transition: all 0.1s ease;
  color: var(--color-text-1);
  cursor: pointer;
  display: inline-block;
}

.custom-comment-action:hover {
  background: var(--color-fill-3);
}
```
