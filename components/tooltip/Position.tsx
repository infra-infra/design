import React, { ReactNode, RefObject, useRef } from 'react';
import { getPlacement, Placement } from './getPlacement';
import { useClientRect } from '../_hooks/useClientRect';
import classNames from '../_util/classNames';

interface IPositionProps {
  triggerRef: RefObject<HTMLElement>;
  children: ReactNode;
  placement?: Placement;
  className?: string;
}

export function Position({
  triggerRef,
  placement = 'bottomLeft',
  className,
  children,
}: IPositionProps): JSX.Element {
  const contentEl = useRef<HTMLDivElement>(null);
  const triggerRect = useClientRect(triggerRef);
  const contentRect = useClientRect(contentEl);

  // 根据触发元素和内容元素的 ClientRect，以及摆放位置，计算出内容元素的坐标
  const position = getPlacement({ triggerRect, contentRect, placement });

  return (
    <div
      className={classNames('oc-position', className)}
      style={{
        position: 'absolute',
        left: position.left,
        top: position.top,
        willChange: 'transform',
      }}
      ref={contentEl}
    >
      {children}
    </div>
  );
}
