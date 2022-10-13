import React, { useRef } from "react";
import { Portal } from "../portal";
import { useToggle } from "../_hooks/useToggle";
import { Position } from "../tooltip/Position";
import { ClickAwayListener } from "../portal/ClickAwayListener";
import { CSSTransition } from "react-transition-group";
const Popover = ({
  content,
  children,
  placement,
  defaultVisible = false,
}: any) => {
  const triggerEl = useRef<HTMLElement>(null);
  const [isOpen, show, hide] = useToggle(defaultVisible);

  return (
    <>
      {React.cloneElement(React.Children.only(children), {
        ref: triggerEl,
        onClick: show,
      })}
      <CSSTransition
        appear
        classNames="my-node"
        unmountOnExit
        mountOnEnter
        in={isOpen}
        timeout={300}
      >
        <Portal>
          <Position triggerRef={triggerEl} placement={placement}>
            <ClickAwayListener onClickAway={hide}>
              <div>{content}</div>
            </ClickAwayListener>
          </Position>
        </Portal>
      </CSSTransition>
    </>
  );
};
export default Popover;
