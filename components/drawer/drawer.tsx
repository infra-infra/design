import type { ReactNode } from 'react';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '../portal';
import classNames from '../_util/classNames';
import useOutsideClick from '../_hooks/useOutsideClick';
import getPrefix from '../_util/getPrefix';

type NavigationDrawProps = {
  children?: ReactNode;
  visible?: boolean;
  onCancel?: () => void;
};

function Drawer(props: NavigationDrawProps): JSX.Element {
  const { children, visible, onCancel } = props;
  const containerRef = useOutsideClick<HTMLDivElement>(() => {
    onCancel?.();
  });

  return (
    <CSSTransition
      nodeRef={containerRef}
      classNames={getPrefix('draw-transition')}
      unmountOnExit
      timeout={300}
      appear
      in={visible}
    >
      <Portal>
        <div className={getPrefix('draw-mask')} />
        <div ref={containerRef} className={getPrefix('draw-container')}>
          {children}
        </div>
      </Portal>
    </CSSTransition>
  );
}

export default Drawer;
