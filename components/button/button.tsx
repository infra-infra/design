import React, { ForwardRefRenderFunction, MouseEventHandler } from 'react';
import classNames from '../_util/classNames';
import getPrefix from '../_util/getPrefix';

type VariantEnum = 'outlined' | 'elevated' | 'filled' | 'tonal' | 'text';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  variant?: VariantEnum;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = function Button(
  props: ButtonProps,
  ref
) {
  const { variant = 'default', children, onClick, onMouseEnter, onMouseLeave, className } = props;

  return (
    <button
      type="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
      onClick={onClick}
      className={classNames(getPrefix('button'), getPrefix(`button-${variant}`), className)}
    >
      {children}
    </button>
  );
};

export default React.forwardRef(Button);
