import React, { ForwardRefRenderFunction, MouseEventHandler } from 'react';
import { css } from '@emotion/css';
import classNames from '../_util/classNames';

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
  const style: Record<string, string> = {
    buttonStyle: css`
      border-radius: 20px;
      height: 40px;
      padding: 0 24px;
      cursor: pointer;
    `,
    elevated: css`
      background-color: var(--md-sys-color-surface);
      color: var(--md-sys-color-primary);

      line-height: 20px;
      box-shadow: var(--md-sys-elevation-1);
      transition: box-shadow 0.2s ease-in-out 0s;
      border: none;

      &:hover {
        box-shadow: var(--md-sys-elevation-2);
      }

      &:focus {
        box-shadow: var(--md-sys-elevation-2);
      }
    `,
    outlined: css`
      border: 1px solid var(--md-sys-color-outline);
      box-shadow: var(--md-sys-elevation-0);
      color: var(--md-sys-color-primary);

      &:hover {
        box-shadow: var(--md-sys-elevation-1);
      }
    `,
    filled: css`
      box-shadow: var(--md-sys-elevation-0);
      background-color: var(--md-sys-color-primary);
      color: var(--md-sys-color-on-primary);
      border: none;
    `,
    text: css`
      color: var(--md-sys-color-primary);
      background-color: transparent;
      border: none;

      &:hover {
        box-shadow: var(--md-sys-elevation-1);
      }
    `,
    tonal: css`
      background-color: var(--md-sys-color-secondary-container);
      color: var(--md-sys-color-on-secondary-container);
      border: none;
    `,
  };

  return (
    <button
      type="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
      onClick={onClick}
      className={classNames(style.buttonStyle, style[variant])}
    >
      {children}
    </button>
  );
};

export default React.forwardRef(Button);
