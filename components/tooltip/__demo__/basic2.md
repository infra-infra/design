---
order: 0
title: 基本用法1
---

警告提示，展现需要关注的信息，适用于简短的警告提示。

```js
import { Tooltip, Space, Button } from '@oc/design';

const App = () => {
  return (
    <Space>
      {[
        'left',
        'leftTop',
        'leftBottom',
        'right',
        'rightTop',
        'rightBottom',
        'top',
        'topLeft',
        'topRight',
        'bottom',
        'bottomLeft',
        'bottomRight',
      ].map((_) => (
        <Tooltip key={_} placement={_} content={`This is ${_} content`}>
          <Button>{_}</Button>
        </Tooltip>
      ))}
    </Space>
  );
};
export default App;
```
