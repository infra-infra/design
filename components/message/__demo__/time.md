---
order: 1
title: 设置延时
---

设置延时关闭时间

```js
import { useMessage, Button, Space } from '@oc/design';

const App = () => {
    const message = useMessage();
  return (
    <Space>
      <Button onClick={() => message.add({
        type: 'info',
        content: Date.now(),
          duration: 1000
      })}>1s延时</Button>
    </Space>
  );
};

export default App;
```
