import React, { ReactNode, RefObject } from 'react';
import { getPlacement, Placement } from './getPlacement';
import { useClientRect } from '../_hooks/useClientRect';
import classNames from '../_util/classNames';

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
      ref={ref}
    >
      {children}
    </div>
  );
};

const PositionRef = React.forwardRef(Position);
export { PositionRef as Position };
