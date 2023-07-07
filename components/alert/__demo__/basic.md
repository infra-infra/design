---
order: 0
title: 基本用法
---

警告提示，展现需要关注的信息，适用于简短的警告提示。

```js
import { Alert,Space } from '@oc/design';

const App = () => {
    return (
        <Space>
            <Alert type="default">Here is a info text</Alert>
            <Alert type="success">Here is a success text</Alert>
        </Space>
    );
};

export default App;
```
