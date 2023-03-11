---
order: 0
title: 基本用法
---

警告提示，展现需要关注的信息，适用于简短的警告提示。

```js
import { Menu, Button } from '@oc/design';

function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <Menu items={[
        <p>item 1</p>, 
        <p>item 2</p>
    ]}>
      <Button>menu</Button>
    </Menu>
  );
}

export default App;
```
