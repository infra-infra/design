import React, { ReactElement, useContext, useEffect, useRef } from "react";
import { PortalContext } from "./index";

interface IClickAwayListenerProps {
  children: ReactElement<any>;
  onClickAway: (evt: Event) => void;
}

export const ClickAwayListener: React.FC<IClickAwayListenerProps> = ({ children, onClickAway }) => {
  const { container } = useContext(PortalContext);
  const childrenEl = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleOutSideClick = (evt: Event) => {
      const node = childrenEl.current!;
      if ((node && node.contains(evt.target as HTMLElement)) || container.contains(evt.target as HTMLElement)) {
        return;
      }

      onClickAway(evt);
    };

    document.body.addEventListener("click", handleOutSideClick);

    return function cleanup() {
      document.body.removeEventListener("click", handleOutSideClick);
    };
  }, []);

  return React.cloneElement(React.Children.only(children), {
    ref: childrenEl,
  });
};
