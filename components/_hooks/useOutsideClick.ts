import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

type OutsideClickHandler = (event: MouseEvent | TouchEvent) => void;
const useOutsideClick = <T extends HTMLElement>(handler?: OutsideClickHandler): RefObject<T> => {
  const ref = useRef<T>(null);
  const handleOutsideClick = (event: MouseEvent | TouchEvent): void => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      handler?.(event);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [ref, handler]);

  return ref;
};
export default useOutsideClick;
