---
order: 0
title: 位置
---

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
