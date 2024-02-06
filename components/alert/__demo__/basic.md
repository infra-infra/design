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
            <Alert type="info"><div>Here is a info text</div></Alert>
            <Alert type="success">Here is a success text</Alert>
            <Alert type="warning">Here is a warning text</Alert>
            <Alert type="danger">Here is a danger text</Alert>
        </Space>
    );
};

export default App;
```
```css
.alert {
    margin-bottom: 16px;
}
```
