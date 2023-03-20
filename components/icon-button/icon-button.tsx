import React, { ForwardRefRenderFunction, MouseEventHandler } from 'react';
import classNames from '../_util/classNames';
import { iconButtonStyle, style } from './style';

type VariantEnum = 'outlined' | 'filled';

interface IconButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  variant?: VariantEnum;
}

const IconButton: ForwardRefRenderFunction<HTMLButtonElement, IconButtonProps> =
  function IconButton(props: IconButtonProps, ref) {
    const { children, onClick, className, onMouseEnter, onMouseLeave, variant = 'filled' } = props;

    return (
      <button
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        type="button"
        onClick={onClick}
        className={classNames(iconButtonStyle, style[variant], className)}
      >
        {children}
      </button>
    );
  };

export default React.forwardRef(IconButton);
