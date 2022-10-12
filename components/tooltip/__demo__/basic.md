---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic
---

## zh-CN

警告提示，展现需要关注的信息，适用于简短的警告提示。

## en-US

Warning prompts. Suitable for displaying short warning prompts in a way that attracts attention.

```js
import { Tooltip,Space } from '@dekopon/design';

const App = () => {
  return (
      <Space>
        {
            ['left','leftTop','leftBottom','right','rightTop','rightBottom','top','topLeft','topRight','bottom','bottomLeft','bottomRight'].map(_=> <Tooltip placement={_} content="This is tooltip content">
              <span>{_}</span>
            </Tooltip>)
        }
      </Space>
  )
}

export default App
```
