import React, { ReactNode, RefObject, useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { getPlacement, Placement } from './getPlacement';
import { useClientRect } from '../_hooks/useClientRect';
import classNames from '../_util/classNames';
import { usePosition } from '../_hooks/usePosition';

interface IPositionProps {
  triggerRef: RefObject<HTMLElement>;
  children: ReactNode;
  placement?: Placement;
  className?: string;
}

const Position: React.ForwardRefRenderFunction<HTMLDivElement, IPositionProps> = function Position(
  { triggerRef, placement = 'bottomLeft', className, children },
  ref
): JSX.Element {
  const triggerRect = useClientRect(triggerRef);
  const contentRect = useClientRect(ref as RefObject<HTMLElement>);
  const position = usePosition({ triggerRect, contentRect, placement });

  return (
    <div
      className={classNames(
        css({
          position: 'absolute',
          left: position.left,
          top: position.top,
          willChange: 'transform',
        }),
        className
      )}
      ref={ref}
    >
      {children}
    </div>
  );
};

const PositionRef = React.forwardRef(Position);
export { PositionRef as Position };
