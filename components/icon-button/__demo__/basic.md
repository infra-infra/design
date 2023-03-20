---
order: 0
title: 基本用法
---

警告提示，展现需要关注的信息，适用于简短的警告提示。

```js
import { IconButton, Space } from '@oc/design';

const App = () => {
  return (
    <Space>
      <IconButton>filled</IconButton>
      <IconButton variant="elevated" type="secondary">
        elevated
      </IconButton>
      <IconButton variant="outlined">outlined</IconButton>
      <IconButton variant="text">Text</IconButton>
      <IconButton variant="tonal">tonal</IconButton>
    </Space>
  );
};

export default App;
```
