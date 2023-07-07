import React, { ForwardRefRenderFunction, MouseEventHandler } from 'react';
import classNames from '../_util/classNames';
import getPrefix from '../_util/getPrefix';

interface IconButtonProps {
  className?: string;
  icon: React.ReactElement;
  onClick?: (event: React.MouseEvent) => void;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  variant?: 'outlined' | 'filled' | 'default';
}

const IconButton: ForwardRefRenderFunction<HTMLButtonElement, IconButtonProps> =
  function IconButton(props: IconButtonProps, ref) {
    const { icon, onClick, className, onMouseEnter, onMouseLeave, variant = 'filled' } = props;

    return (
      <button
        className={classNames(getPrefix('icon-button'))}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        type="button"
        onClick={onClick}
      >
        {icon && React.createElement(icon as any)}
      </button>
    );
  };

export default React.forwardRef(IconButton);
