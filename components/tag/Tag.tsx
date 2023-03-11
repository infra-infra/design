import React from 'react';
import classNames from '../_util/classNames';
import { tagStyle, style } from './style';

type VariantEnum = 'outlined' | 'elevated' | 'filled' | 'tonal' | 'text';

type TagType = {
  children: React.ReactNode;
  variant?: VariantEnum;
  className?: string;
  onClick?: () => void;
};

function Tag({ children, variant = 'outlined', onClick, className }: TagType): JSX.Element {
  return (
    <span
      role="presentation"
      onClick={onClick}
      className={classNames(tagStyle, style[variant], className)}
    >
      {children}
    </span>
  );
}

export default Tag;
