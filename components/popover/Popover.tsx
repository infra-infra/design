import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '../portal';
import { useToggle } from '../_hooks/useToggle';
import { Position } from '../tooltip/Position';
import useOutsideClick from '../_hooks/useOutsideClick';

function Popover({ content, children, placement, defaultVisible = false }: any) {
  const nodeEl = useRef<HTMLElement>(null);
  const [isOpen, show, hide, toggle] = useToggle(defaultVisible);
  const ref = useOutsideClick<HTMLDivElement>(hide);

  return (
    <>
      {React.cloneElement(React.Children.only(children), {
        ref: nodeEl,
        onClick: toggle,
      })}
      <CSSTransition
        nodeRef={ref}
        appear
        classNames="oc-transition"
        unmountOnExit
        mountOnEnter
        in={isOpen}
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
