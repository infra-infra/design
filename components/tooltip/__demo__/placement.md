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
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
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
