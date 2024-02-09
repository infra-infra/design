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
      })}>info</Button>
        <Button onClick={() => message.add({
            type: 'success',
            content: Date.now(),
        })}>success</Button>
        <Button onClick={() => message.add({
            type: 'error',
            content: Date.now(),
        })}>error</Button>
        <Button onClick={() => message.add({
            type: 'warning',
            content: Date.now(),
        })}>warning</Button>
    </Space>
  );
};

export default App;
```
