import React, { ForwardRefRenderFunction, MouseEventHandler } from 'react';
import classNames from '../_util/classNames';
import { buttonStyle, style } from './style';

type VariantEnum = 'outlined' | 'elevated' | 'filled' | 'tonal' | 'text';

interface ButtonProps {
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
  const { variant = 'filled', children, onClick, onMouseEnter, onMouseLeave } = props;

  return (
    <button
      type="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
      onClick={onClick}
      className={classNames(buttonStyle, style[variant])}
    >
      {children}
    </button>
  );
};

export default React.forwardRef(Button);
