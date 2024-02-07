import React, { forwardRef, PropsWithChildren, ReactElement, useEffect, useRef } from 'react';

interface IClickAwayListenerProps {
  children: ReactElement<HTMLElement>;
  onClickAway: (evt: Event) => void;
}

const ChildrenWithRef = forwardRef<HTMLElement, PropsWithChildren<any>>((props, ref) =>
  React.cloneElement(React.Children.only(props.children), {
    ...props,
    ref,
  })
);
ChildrenWithRef.displayName = 'ChildrenWithRef';
export const ClickAwayListener: React.FC<IClickAwayListenerProps> = ({ children, onClickAway }) => {
  const childrenEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (evt: Event) => {
      const node = childrenEl.current!;
      if (
        (node && node.contains(evt.target as HTMLElement)) ||
        document.body.contains(evt.target as HTMLElement)
      ) {
        return;
      }

      onClickAway(evt);
    };

    document.body.addEventListener('click', handleOutSideClick);

    return function cleanup() {
      document.body.removeEventListener('click', handleOutSideClick);
    };
  }, []);
  return <ChildrenWithRef ref={childrenEl}>{children}</ChildrenWithRef>;
};
