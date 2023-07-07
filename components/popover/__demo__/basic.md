---
order: 0
title: 基本用法
---

警告提示，展现需要关注的信息，适用于简短的警告提示。

```js
import { Popover, Button } from '@oc/design';

function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <Popover
        visible={visible}
        hide={()=>setVisible(false)}
        show={()=>setVisible(true)}
      content={
        <span>
          <p>Here is the text content</p>
          <p>Here is the text content</p>
          <p>Here is the text content</p>
          <p>Here is the text content</p>
        </span>
      }
    >
      <Button type="primary">Click</Button>
    </Popover>
  );
}

export default App;
```
