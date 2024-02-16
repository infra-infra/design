import React, { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Portal } from '../portal';
import { Position } from '../tooltip/Position';
import useOutsideClick from '../_hooks/useOutsideClick';
import getPrefix from '../_util/getPrefix';

function Popover({ content, children, placement, visible = false, show, hide }: any): JSX.Element {
  const nodeEl = useRef<HTMLElement>(null);
  const ref = useOutsideClick<HTMLDivElement>(hide);

  return (
    <>
      {React.cloneElement(React.Children.only(children), {
        ref: nodeEl,
        onClick: show,
      })}
      <AnimatePresence>
        {visible && (
          <Portal>
            <Position
              className={getPrefix('popover')}
              ref={ref}
              triggerRef={nodeEl}
              placement={placement}
            >
              {content}
            </Position>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
}

export default Popover;
