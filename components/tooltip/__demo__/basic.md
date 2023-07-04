---
order: 0
title: 基本用法
---

基础用法

```js
import { Tooltip, Space, Button } from '@oc/design';

const App = () => {
  return (
      <Tooltip content='如果它长得像鸭子，走起来像鸭子，叫起来也像鸭子，那它一定是个鸭子。'>
          <Button>鸭子</Button>
      </Tooltip>
  )
};
export default App;
```

```css
.word {
    white-space: pre-wrap;
}
```
