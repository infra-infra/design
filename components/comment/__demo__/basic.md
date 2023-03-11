---
order: 0
title: 基础用法
---

## zh-CN

一个基本的评论组件，带有作者、头像、时间和操作。

## en-US

A basic comment component with author, avatar, time and actions.

```js
import React from 'react';
import { Comment } from '@oc/design';

const App = () => {
  return (
    <>
      <Comment
        author="Socrates"
        avatar={'https://source.unsplash.com/1600x900/?nature,water&t=1'}
        content="Comment body content.Comment body content.Comment body content.Comment body content."
        datetime="1 hour"
        actions={[<div>Action</div>]}
      >
        <Comment
          author="Socrates"
          avatar={'https://source.unsplash.com/1600x900/?nature,water&t=2'}
          content="Comment body content."
          datetime="1 hour"
          actions={[<div>Action</div>]}
        ></Comment>
      </Comment>
    </>
  );
};

export default App;
```

```css
.custom-comment-action {
  padding: 0 4px;
  line-height: 24px;
  border-radius: 2px;
  background: transparent;
  transition: all 0.1s ease;
  color: var(--color-text-1);
  cursor: pointer;
  display: inline-block;
}

.custom-comment-action:hover {
  background: var(--color-fill-3);
}
```
