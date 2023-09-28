import React, { ForwardRefRenderFunction, MouseEventHandler, ReactNode } from 'react';
import classNames from '../_util/classNames';
import getPrefix from '../_util/getPrefix';

interface IconButtonProps {
  children?: ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  border?: boolean;
}

const IconButton: ForwardRefRenderFunction<HTMLButtonElement, IconButtonProps> =
  function IconButton(props: IconButtonProps, ref) {
    const { border, children, onClick, onMouseEnter, onMouseLeave } = props;

    return (
      <button
        className={classNames(getPrefix('icon-button'), border && getPrefix('icon-button-border'))}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

export default React.forwardRef(IconButton);
