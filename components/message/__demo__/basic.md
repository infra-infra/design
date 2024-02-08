---
order: 0
title: 基本用法
---

警告提示，展现需要关注的信息，适用于简短的警告提示。

```js
import { useMessage, Button, Space } from '@oc/design';

const App = () => {
    const message = useMessage();
  return (
    <Space>
      <Button onClick={() => message.add({
        type: 'info',
        content: Date.now(),
      })}>success</Button>
    </Space>
  );
};

export default App;
```
