import React, { ReactElement, ReactNode, RefObject } from 'react';
import { motion } from 'framer-motion';
import { Placement } from '@floating-ui/react';
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
  { triggerRef, placement = 'bottom-start', className, children },
  ref
): ReactElement {
  const triggerRect = useClientRect(triggerRef);
  const contentRect = useClientRect(ref as RefObject<HTMLElement>);
  const position = usePosition({ triggerRect, contentRect, placement });

  return (
    <motion.div
      key="tooltip"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'absolute',
        left: position.left,
        top: position.top,
        willChange: 'transform',
      }}
      className={classNames(className)}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

const PositionRef = React.forwardRef(Position);
export { PositionRef as Position };
