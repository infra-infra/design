import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import useIsFirstRender from "../_hooks/useIsFirstRender";
import {isServerRendering} from "../_util/dom";
interface PortalType{
  children: React.ReactNode;
}
export const Portal = (props:PortalType) => {
  let containerRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useIsFirstRender();

  if ((isFirstRender || containerRef.current === null) && !isServerRendering) {
    containerRef.current = document.createElement("div");
    containerRef.current.setAttribute("role", "portal");
    document.body.appendChild(containerRef.current);
  }

  useEffect(() => {
    return ()=> {
      const container = containerRef.current;
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
        containerRef.current = null;
      }
    };
  }, []);

  return containerRef.current?createPortal(props.children, containerRef.current):null
};
