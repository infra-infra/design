import React, { ForwardRefRenderFunction, MouseEventHandler } from 'react';
import classNames from '../_util/classNames';
import { iconButtonStyle } from './style';

interface IconButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
}

const IconButton: ForwardRefRenderFunction<HTMLButtonElement, IconButtonProps> =
  function IconButton(props: IconButtonProps, ref) {
    const { children, onClick, className, onMouseEnter, onMouseLeave } = props;

    return (
      <button
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        type="button"
        onClick={onClick}
        className={classNames(iconButtonStyle, className)}
      >
        {children}
      </button>
    );
  };

export default React.forwardRef(IconButton);
