import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '../portal';
import { useToggle } from '../_hooks/useToggle';
import { Position } from '../tooltip/Position';
import { ClickAwayListener } from '../portal/ClickAwayListener';
import useOutsideClick from '../_hooks/useOutsideClick';

function Popover({ content, children, placement, defaultVisible = false }: any) {
  const triggerEl = useRef<HTMLElement>(null);
  const [isOpen, show, hide, toggle] = useToggle(defaultVisible);
  const ref = useOutsideClick<HTMLDivElement>(hide);

  return (
    <>
      {React.cloneElement(<span>{React.Children.only(children)}</span>, {
        ref: triggerEl,
        onClick: toggle,
      })}
      <CSSTransition
        nodeRef={ref}
        appear
        classNames="my-node"
        unmountOnExit
        mountOnEnter
        in={isOpen}
        timeout={300}
      >
        <Portal>
          <Position triggerRef={triggerEl} placement={placement}>
            {/* <ClickAwayListener onClickAway={hide}> */}
            <div ref={ref}>{content}</div>
            {/* </ClickAwayListener> */}
          </Position>
        </Portal>
      </CSSTransition>
    </>
  );
}
export default Popover;
