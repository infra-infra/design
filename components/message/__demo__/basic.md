---
order: 0
title: 基本用法
---

警告提示，展现需要关注的信息，适用于简短的警告提示。

```js
import { Message, Button, Space } from '@oc/design';

const App = () => {
  return (
    <Space>
      <Button onClick={() => Message.success('success', null)}>success</Button>
      <Button onClick={() => Message.info('info')}>info</Button>
      <Button onClick={() => Message.error('error')}>error</Button>
      <Button onClick={() => Message.warning('warning')}>warning</Button>
      <Button onClick={() => Message.loading('loading')}>loading</Button>
    </Space>
  );
};

export default App;
```
