import React, { useRef } from 'react';
import type { ReactNode } from 'react';
import { IconClose } from '@oc/icon';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '../portal';
import { Button } from '../button';
import useOutsideClick from '../_hooks/useOutsideClick';
import classNames from '../_util/classNames';

type ModalType = {
  title?: string;
  children?: ReactNode;
  visible?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
};

function Modal(props: ModalType) {
  const { title, children, visible, onConfirm = () => {}, onCancel = () => {} } = props;
  const ref = useOutsideClick<HTMLDivElement>(onCancel);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      nodeRef={containerRef}
      classNames="modal-transition"
      unmountOnExit
      timeout={300}
      in={visible}
    >
      <Portal>
        <div ref={containerRef} className={classNames('zzf-modal-mask')}>
          <div ref={ref} className="zzf-modal-container">
            <header className="zzf-modal-header">
              <div>{title}</div>
              <IconClose className="zzf-model-close" onClick={onCancel} />
            </header>
            <div>{children}</div>
            <footer className="zzf-modal-footer">
              <Button onClick={onCancel}>取消</Button>
              <Button type="primary" onClick={onConfirm}>
                确定
              </Button>
            </footer>
          </div>
        </div>
      </Portal>
    </CSSTransition>
  );
}

export default Modal;
