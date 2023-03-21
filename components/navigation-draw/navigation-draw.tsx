import type { ReactNode } from 'react';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '../portal';
import { style } from './style';
import classNames from '../_util/classNames';
import useOutsideClick from '../_hooks/useOutsideClick';

type NavigationDrawProps = {
  children?: ReactNode;
  visible?: boolean;
  onCancel?: () => void;
};

function NavigationDraw(props: NavigationDrawProps): JSX.Element {
  const { children, visible, onCancel } = props;
  const containerRef = useOutsideClick<HTMLDivElement>(() => {
    onCancel?.();
  });

  return (
    <CSSTransition
      nodeRef={containerRef}
      classNames={style.transition}
      unmountOnExit
      timeout={300}
      appear
      in={visible}
    >
      <Portal>
        <div className={classNames(style.mask, visible && style.active)} />
        <div ref={containerRef} className={style.container}>
          {children}
        </div>
      </Portal>
    </CSSTransition>
  );
}

export default NavigationDraw;
