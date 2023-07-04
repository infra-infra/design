---
order: 0
title: 基本用法
---

xxxxxx
```js
import { IconButton, Space } from '@oc/design';
const Icon = ()=> <span>abc</span>
const App = () => {
  return (
    <Space>
      <IconButton icon={Icon}/>
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
