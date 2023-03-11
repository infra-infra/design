---
order: 1
title: 不同类型
---

警告提示的类型有 `info`, `success`, `warning`, `error` 四种。

```js
import { Alert } from '@oc/design';

const App = () => {
  return (
    <div>
      <Alert type="info">Here is a info text</Alert>
      <Alert type="warning">Here is a warning text</Alert>
      <Alert type="success">Here is a success text</Alert>
      <Alert type="error">Here is a error text</Alert>
    </div>
  );
};

export default App;
```
