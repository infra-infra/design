import { cx } from '@emotion/css';
import React from 'react';
import classNames from '../_util/classNames';
import { tagStyle, style } from './style';

type TagType = {
  children: React.ReactNode;
  variant?: 'outlined' | 'elevated' | 'filled' | 'tonal' | 'text';
  className?: string;
  onClick?: () => void;
};

function Tag(props: TagType): JSX.Element {
  const { children, variant = 'outlined', onClick, className } = props;
  return (
    <span
      role="presentation"
      onClick={onClick}
      className={cx(tagStyle, style[variant], className)}
    >
      {children}
    </span>
  );
}

export default Tag;
