import {RefObject, useLayoutEffect, useMemo, useState} from "react";

export const useClientRect = (ele: RefObject<HTMLElement | null>) => {
  const [clientRect, setClientRect] = useState<DOMRect | null>(null);

  const updateClientRect = useMemo(() => {
    return () => {
      setClientRect(ele.current!.getBoundingClientRect());
    };
  }, []);

  // 只有当 React 组件 didMount 时，才能取到元素的 ClientRect，所以这里要使用 useLayoutEffect
  useLayoutEffect(() => {
    if (ele.current) {
      updateClientRect();
    }
  }, []);

  return [clientRect, updateClientRect] as [typeof clientRect, typeof updateClientRect];
};
