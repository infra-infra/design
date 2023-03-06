import React, { ForwardRefRenderFunction, MouseEventHandler } from 'react';
import classNames from '../_util/classNames';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'primary' | 'text' | 'secondary';
  size?: 'default' | 'primary' | 'mini' | 'small';
  onClick?: (event: React.MouseEvent) => void;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = function Button(
  {
    children,
    type = 'secondary',
    size = 'default',
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
  }: ButtonProps,
  ref
) {
  return (
    <button
      type="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
      onClick={onClick}
      className={classNames('zzf-btn', `zzf-btn-type-${type}`, `zzf-btn-size-${size}`, className)}
    >
      {children}
    </button>
  );
};

export default React.forwardRef(Button);
