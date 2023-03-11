---
order: 0
title: 基础用法
---

标签的基础用法。

```js
import React from 'react';
import { Tag, Space } from '@oc/design';

const App = () => {
  return (
    <Space size="large">
      <Tag variant="elevated">elevated</Tag>
      <Tag variant="filled">filled</Tag>
      <Tag variant="tonal">tonal</Tag>
      <Tag variant="text">text</Tag>
      <Tag variant="outlined">outlined</Tag>
    </Space>
  );
};

export default App;
```
