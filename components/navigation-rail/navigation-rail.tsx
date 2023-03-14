import type { ReactNode } from 'react';
import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '../portal';
import useOutsideClick from '../_hooks/useOutsideClick';
import { style } from './style';

type ModalType = {
  title?: string;
  children?: ReactNode;
  visible?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
};

function NavigationRail(props: ModalType): JSX.Element {
  const { title, children, visible, onConfirm, onCancel } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      nodeRef={containerRef}
      classNames={style.transition}
      unmountOnExit
      timeout={300}
      in={visible}
    >
      <Portal>
        <div ref={containerRef}>
          <div className={style.container}>{children}</div>
        </div>
      </Portal>
    </CSSTransition>
  );
}

export default NavigationRail;
