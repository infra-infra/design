---
order: 1
title:
  zh-CN: bottom right
  en-US: bottom right
---

## zh-CN

警告提示，展现需要关注的信息，适用于简短的警告提示。

## en-US

Warning prompts. Suitable for displaying short warning prompts in a way that attracts attention.

```js
import { Popover, Button } from "@oc/design";

function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <Popover
            placement="bottomRight"
      content={
        <span>
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
