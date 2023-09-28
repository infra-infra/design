import React, { useRef } from 'react';
import type { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '../portal';
import { Button } from '../button';
import useOutsideClick from '../_hooks/useOutsideClick';
import classNames from '../_util/classNames';
import getPrefix from '../_util/getPrefix';

type ModalType = {
  title?: string;
  children?: ReactNode;
  visible?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
};

function Modal(props: ModalType): JSX.Element {
  const { title, children, visible, onConfirm, onCancel } = props;
  const ref = useOutsideClick<HTMLDivElement>(onCancel);
  const containerRef = useRef<HTMLDivElement>(null);

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
