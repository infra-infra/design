import { Children, cloneElement, type ReactElement, type ReactNode, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Position } from './Position';
import { Portal } from '../portal';
import { useToggle } from '../_hooks/useToggle';
import { Placement } from './getPlacement';
// import getPrefix from '../_util/getPrefix';
import usePrefix from '../_hooks/usePrefix';

interface ITooltipsProps {
  content?: ReactNode;
  placement?: Placement;
  children: ReactElement;
}

const Tooltip: (props: ITooltipsProps) => JSX.Element = function Tooltip({
  content,
  placement,
  children,
}) {
  const getPrefix = usePrefix();
  const [isOpen, show, hide] = useToggle();
  const triggerEl = useRef<HTMLDivElement>(null);
  const nodeRef = useRef(null);
  return (
    <>
      {cloneElement(Children.only(children), {
        ref: nodeRef,
        onMouseEnter: show,
        onMouseLeave: hide,
      })}
      <AnimatePresence>
        {isOpen && (
          <Portal>
            <Position
              ref={triggerEl}
              className={getPrefix('tooltip')}
              triggerRef={nodeRef}
              placement={placement}
            >
              {content}
            </Position>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};
export default Tooltip;
