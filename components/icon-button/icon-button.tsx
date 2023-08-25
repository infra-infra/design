import React, { ForwardRefRenderFunction, MouseEventHandler, ReactElement, ReactNode } from 'react';
import classNames from '../_util/classNames';
import getPrefix from '../_util/getPrefix';

interface IconButtonProps {
  icon: ReactElement;
  children: ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  border?: boolean;
}

const IconButton: ForwardRefRenderFunction<HTMLButtonElement, IconButtonProps> =
  function IconButton(props: IconButtonProps, ref) {
    const { icon, border, children, onClick, onMouseEnter, onMouseLeave } = props;

    return (
      <button
        className={classNames(getPrefix('icon-button'), border && getPrefix('icon-button-border'))}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        type="button"
        onClick={onClick}
      >
        {children && children}
        {icon && React.createElement(icon as never)}
      </button>
    );
  };

export default React.forwardRef(IconButton);
