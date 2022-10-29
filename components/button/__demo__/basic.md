---
order: 0
title: 基本用法
---

警告提示，展现需要关注的信息，适用于简短的警告提示。

```js
import { Button,Space } from '@oc/design';

const App = () => {
  return <Space>
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
    <Button type="outline">Outline</Button>
    <Button type="text">Text</Button>
  </Space>
}

export default App
```
