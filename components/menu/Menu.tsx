import React, { ReactNode, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '../portal';
import { useToggle } from '../_hooks/useToggle';
import { Position } from '../tooltip/Position';
import useOutsideClick from '../_hooks/useOutsideClick';
import { style } from './style';

function Menu({ items, children, placement, defaultVisible = false }: any): JSX.Element {
  const nodeEl = useRef<HTMLElement>(null);
  const [isOpen, show, hide, toggle] = useToggle(defaultVisible);
  const ref = useOutsideClick<HTMLDivElement>(hide);

  return (
    <>
      {React.cloneElement(React.Children.only(children), {
        ref: nodeEl,
        onClick: toggle,
      })}
      <CSSTransition
        nodeRef={ref}
        appear
        classNames="oc-transition"
        unmountOnExit
        mountOnEnter
        in={isOpen}
        timeout={300}
      >
        <Portal>
          <Position ref={ref} triggerRef={nodeEl} placement={placement}>
            <ul className={style.container}>
              {items.map((item: ReactNode, index: number) =>
                // eslint-disable-next-line react/no-array-index-key
                React.createElement('li', { className: style.item, key: index }, item)
              )}
            </ul>
          </Position>
        </Portal>
      </CSSTransition>
    </>
  );
}

export default Menu;
