import { RefObject, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import debounce from '../_util/debounce';

export const useClientRect = (rectRef: RefObject<HTMLElement>): DOMRect | undefined => {
  const [clientRect, setClientRect] = useState<DOMRect>();
  const updateClientRect = useCallback(() => {
    if (rectRef.current) {
      setClientRect(rectRef.current.getBoundingClientRect());
    }
  }, [rectRef]);

  useLayoutEffect(() => {
    // todo 优雅解决setTimeout问题
    setTimeout(() => {
      updateClientRect();
    }, 0);
    const debouncedUpdateClientRect = debounce(updateClientRect, 100);
    window.addEventListener('resize', debouncedUpdateClientRect);
    window.addEventListener('scroll', debouncedUpdateClientRect);
    return () => {
      window.removeEventListener('resize', debouncedUpdateClientRect);
      window.removeEventListener('scroll', debouncedUpdateClientRect);
    };
  }, [rectRef, updateClientRect]);

  return clientRect;
};
