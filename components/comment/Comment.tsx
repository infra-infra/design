import React, { ReactNode } from 'react';
import { comment, container, actionsStyle, contentStyle, authorStyle } from './style';

interface CommentProps {
  author?: ReactNode;
  avatar: ReactNode;
  content?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
}

function Comment(props: CommentProps): JSX.Element {
  const { author, avatar, content, actions, children } = props;
  return (
    <div className={comment}>
      {avatar}
      <div>
        <div className={container}>
          <header className={authorStyle}>{author}</header>
          <p className={contentStyle}>{content}</p>
        </div>
        <div className={actionsStyle}>{actions}</div>
        <span>{children}</span>
      </div>
    </div>
  );
}

export default Comment;
