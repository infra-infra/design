import React, { useRef } from "react";
import { Portal } from "../portal";
import { useToggle } from "../_hooks/useToggle";
import { Position } from "../tooltip/Position";
import { ClickAwayListener } from "../portal/ClickAwayListener";
import { CSSTransition } from "react-transition-group";
import useOutsideClick from "../_hooks/useOutsideClick";
const Popover = ({
  content,
  children,
  placement,
  className,
  defaultVisible = false,
}: any) => {
  const triggerEl = useRef<HTMLElement>(null);
  const [isOpen, show, hide] = useToggle(defaultVisible);
  const ref = useOutsideClick<HTMLDivElement>(hide);

  return (
    <>
        <span onClick={show} ref={triggerEl}>
            {children}
        </span>
      {/*{React.cloneElement(React.Children.only(children), {*/}
      {/*  ref: node=>triggerEl=node,*/}
      {/*  onClick: show,*/}
      {/*})}*/}
      <CSSTransition nodeRef={ref}
        appear
        classNames="my-node"
        unmountOnExit
        mountOnEnter
        in={isOpen}
        timeout={300}
      >
        <Portal>
          <Position triggerRef={triggerEl} placement={placement}>
            {/*<ClickAwayListener onClickAway={hide}>*/}
              <div ref={ref}>{content}</div>
            {/*</ClickAwayListener>*/}
          </Position>
        </Portal>
      </CSSTransition>
    </>
  );
};
export default Popover;
