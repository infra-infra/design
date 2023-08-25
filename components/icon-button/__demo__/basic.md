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
      <IconButton icon={IconAuto}/>
      <IconButton border icon={IconCode}/>
      <IconButton icon={IconCopy}/>
      <IconButton>OK</IconButton>
    </Space>
  );
};

export default App;
```
