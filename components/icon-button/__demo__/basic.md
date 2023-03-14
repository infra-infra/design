---
order: 0
title: 基本用法
---

警告提示，展现需要关注的信息，适用于简短的警告提示。

```js
import { Button, Space } from '@oc/design';

const App = () => {
  return (
    <Space>
      <Button>filled</Button>
      <Button variant="elevated" type="secondary">
        elevated
      </Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="text">Text</Button>
      <Button variant="tonal">tonal</Button>
    </Space>
  );
};

export default App;
```
