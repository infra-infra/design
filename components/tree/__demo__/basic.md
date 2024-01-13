---
order: 0
title: 基础用法
---

一个基本的评论组件，带有作者、头像、时间和操作。

```js
import React from 'react';
import { Tree } from '@oc/design';

const App = () => {
    const [treeData, setTreeData] = useState(Array.from({ length: 10 }, (_, i) => ({
        id: i,
        title: `title ${i}`,
        children: Array.from({ length: 10 }, (_, j) => ({
            id: `${i}-${j}`,
            title: `title ${i}-${j}`,
            children: Array.from({ length: 10 }, (_, k) => ({
                id: `${i}-${j}-${k}`,
                title: `title ${i}-${j}-${k}`,
            })),
        })),
    })));
  return (
      <Tree treeData={treeData} placeholder="placeholder" />
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
