import React, { ReactNode } from 'react';

interface CommentProps {
  author?: ReactNode;
  avatar: string;
  content?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
}

function Comment(props: CommentProps) {
  const { author, avatar, content, actions, children } = props;
  return (
    <div className="zzf-comment">
      <img className="zzf-comment-avatar" src={avatar} alt={avatar} />
      <div>
        <div className="zzf-comment-container">
          <header className="zzf-comment-author">{author}</header>
          <p className="zzf-comment-content">{content}</p>
        </div>
        <ul className="zzf-comment-actions">{actions}</ul>
        <span>{children}</span>
      </div>
    </div>
  );
}
export default Comment;
