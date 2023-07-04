---
order: 0
title: 基础
---

按钮的 type 分别为 default、tertiary、primary、info、success、warning 和 error。

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
