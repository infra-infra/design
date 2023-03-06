import React, { ReactNode, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Position } from './Position';
import { Portal } from '../portal';
import { useToggle } from '../_hooks/useToggle';
import { Placement } from './getPlacement';

interface ITooltipsProps {
  content?: ReactNode;
  placement?: Placement;
  children: React.ReactElement;
}

const Tooltip: (props: ITooltipsProps) => JSX.Element = function Tooltip({
  content,
  placement,
  children,
}) {
  const [isOpen, show, hide] = useToggle();
  const triggerEl = useRef<HTMLElement>(null);
  const nodeRef = useRef(null);
  return (
    <>
      {React.cloneElement(React.Children.only(children), {
        ref: triggerEl,
        onMouseEnter: show,
        onMouseLeave: hide,
      })}
      <CSSTransition
        nodeRef={nodeRef}
        appear
        classNames="my-node"
        unmountOnExit
        mountOnEnter
        in={isOpen}
        timeout={300}
      >
        <Portal>
          <Position className="oc-tooltip" triggerRef={triggerEl} placement={placement}>
            <span ref={nodeRef}>{content}</span>
          </Position>
        </Portal>
      </CSSTransition>
    </>
  );
};
export default Tooltip;
