import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '../portal';
import { Position } from '../tooltip/Position';
import useOutsideClick from '../_hooks/useOutsideClick';

function Popover({ content, children, placement, visible = false, show, hide }: any): JSX.Element {
  const nodeEl = useRef<HTMLElement>(null);
  const ref = useOutsideClick<HTMLDivElement>(hide);

  return (
    <>
      {React.cloneElement(React.Children.only(children), {
        ref: nodeEl,
        onClick: show,
      })}
      <CSSTransition
        nodeRef={ref}
        appear
        classNames="oc-transition"
        unmountOnExit
        mountOnEnter
        in={visible}
        timeout={300}
      >
        <Portal>
          <Position className="oc-tooltip" ref={ref} triggerRef={nodeEl} placement={placement}>
            <span>{content}</span>
          </Position>
        </Portal>
      </CSSTransition>
    </>
  );
}

export default Popover;
