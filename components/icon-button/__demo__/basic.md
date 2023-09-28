---
order: 0
title: 基本用法
---

```js
import { IconButton, Space } from '@oc/design';
import { IconAuto, IconCode, IconCopy } from '@oc/icon';
const App = () => {
  return (
    <Space>
      <IconButton><IconAuto/></IconButton>
      <IconButton border><IconCode/></IconButton>
      <IconButton>OK</IconButton>
    </Space>
  );
};

export default App;
```
