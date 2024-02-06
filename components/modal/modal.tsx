import type { ReactNode } from 'react';
import React, { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '../portal';
import useOutsideClick from '../_hooks/useOutsideClick';
import getPrefix from '../_util/getPrefix';

type ModalType = {
  children?: ReactNode;
  visible?: boolean;
  onCancel?: () => void;
};

function Modal(props: ModalType): JSX.Element {
  const { children, visible, onCancel } = props;
  const ref = useOutsideClick<HTMLDivElement>(onCancel);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let originalOverflow = '';
    if (visible) {
      originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [visible]);
  return (
    <CSSTransition
      nodeRef={containerRef}
      classNames={getPrefix('modal-transition')}
      unmountOnExit
      timeout={300}
      in={visible}
    >
      <Portal>
        <div ref={containerRef} className={getPrefix('modal-mask')}>
          <div ref={ref} className={getPrefix('modal-container')}>
            {children}
          </div>
        </div>
      </Portal>
    </CSSTransition>
  );
}

export default Modal;
