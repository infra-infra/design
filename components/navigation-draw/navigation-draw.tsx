import type { ReactNode } from 'react';
import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '../portal';
import { style } from './style';
import classNames from '../_util/classNames';
import useOutsideClick from '../_hooks/useOutsideClick';

type NavigationDrawProps = {
  className?: string;
  children?: ReactNode;
  visible?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
};

function NavigationDraw(props: NavigationDrawProps): JSX.Element {
  const { className, children, visible, onConfirm, onCancel } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useOutsideClick(onCancel);

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
          <div className={classNames(style.mask, visible && style.active)} />
          {/* @ts-ignore */}
          <div ref={ref} className={style.container}>
            {children}
          </div>
        </div>
      </Portal>
    </CSSTransition>
  );
}

export default NavigationDraw;
