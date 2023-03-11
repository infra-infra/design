---
order: 0
title: 基本用法
---

警告提示，展现需要关注的信息，适用于简短的警告提示。

```js
import { Message, Button } from '@oc/design';

const App = () => {
  return (
    <>
      <Button onClick={() => Message.success('success')}>success</Button>
      <Button onClick={() => Message.info('info')}>info</Button>
    </>
  );
};

export default App;
```
