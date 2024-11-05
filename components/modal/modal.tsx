import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { X } from 'lucide-react';
import { Portal } from '../portal';
import useOutsideClick from '../_hooks/useOutsideClick';
import usePrefix from '../_hooks/usePrefix';

type ModalType = {
  children?: ReactNode;
  visible?: boolean;
  onCancel?: () => void;
};
interface ModalProps {
  children?: ReactNode;
  visible?: boolean;
  onCancel?: () => void;
  title?: ReactNode;
  width?: number | string;
  centered?: boolean;
  closable?: boolean;
  maskClosable?: boolean;
  footer?: ReactNode | null;
  className?: string;
}

function Modal(props: ModalProps): JSX.Element {
  const {
    children,
    visible,
    onCancel,
    title = null,
    width = 520,
    centered = true,
    closable = false,
    maskClosable = true,
    footer = null,
    className,
  } = props;

  const getPrefix = usePrefix();
  const ref = useOutsideClick<HTMLDivElement>(maskClosable ? onCancel : undefined);
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

  const renderHeader = () => {
    if (!title && !closable) return null;
    return (
      <div className={getPrefix('modal-header')}>
        {title && <div className={getPrefix('modal-title')}>{title}</div>}
        {closable && (
          <button 
            type="button"
            className={getPrefix('modal-close')} 
            onClick={onCancel} 
            aria-label="Close"
          >
            <X />
          </button>
        )}
      </div>
    );
  };

  const renderFooter = () => {
    if (footer === null) return null;
    return (
      <div className={getPrefix('modal-footer')}>
        {footer || (
          <>
            <button
              type="button"
              className={`${getPrefix('btn')} ${getPrefix('btn-default')}`}
              onClick={onCancel}
            >
              取消
            </button>
            <button
              type="button"
              className={`${getPrefix('btn')} ${getPrefix('btn-primary')}`}
              onClick={onCancel}
            >
              确定
            </button>
          </>
        )}
      </div>
    );
  };

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
          <div
            ref={ref}
            className={`${getPrefix('modal-container')} ${className || ''}`}
            style={{ width, marginTop: centered ? 0 : '100px' }}
          >
            {renderHeader()}
            <div className={getPrefix('modal-content')}>{children}</div>
            {renderFooter()}
          </div>
        </div>
      </Portal>
    </CSSTransition>
  );
}

export default Modal;
