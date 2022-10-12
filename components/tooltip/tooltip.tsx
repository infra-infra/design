import React, { ReactNode, useRef } from "react";
import { Position } from "./Position";
import { Portal } from "../portal";
import { useToggle } from "../_hooks/useToggle";
import { CSSTransition } from "react-transition-group";
import { Placement } from "./getPlacement";

interface ITooltipsProps {
  content?: ReactNode;
  placement?: Placement;
  children: React.ReactElement;
}

const Tooltip = ({ content, placement, children }: ITooltipsProps) => {
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
        appear
        classNames="my-node"
        unmountOnExit
        mountOnEnter
        in={isOpen}
        timeout={300}
      >
        <Portal>
          <Position
            className={"oc-tooltip"}
            triggerRef={triggerEl}
            placement={placement}
          >
            <span ref={nodeRef}>{content}</span>
          </Position>
        </Portal>
      </CSSTransition>
    </>
  );
};
export default Tooltip;
