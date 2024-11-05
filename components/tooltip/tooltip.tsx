import { Children, cloneElement, useRef, type ReactElement, type ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Portal } from '../portal';
import { useToggle } from '../_hooks/useToggle';
import {
  useFloating,
  offset,
  flip,
  shift,
  FloatingArrow,
  arrow,
  type Placement,
} from '@floating-ui/react';
import usePrefix from '../_hooks/usePrefix';

interface ITooltipsProps {
  content?: ReactNode | string;
  placement?: Placement;
  children: ReactElement;
}

const Tooltip: (props: ITooltipsProps) => JSX.Element = function Tooltip({
  content,
  placement = 'top',
  children,
}) {
  const getPrefix = usePrefix();
  const [isOpen, show, hide] = useToggle();
  const arrowRef = useRef(null);
  const { refs, floatingStyles, context } = useFloating({
    placement,
    middleware: [
      arrow({
        element: arrowRef,
      }),
      offset(8), // 设置偏移量
      flip(), // 自动翻转位置
      shift(), // 位置调整以保持可见
    ],
  });
  const renderContent = () => {
    if (typeof content === 'string') {
      return <div>{content}</div>;
    }
    return content;
  };

  return (
    <>
      {cloneElement(Children.only(children), {
        ref: refs.setReference,
        onMouseEnter: show,
        onMouseLeave: hide,
      })}
      <AnimatePresence>
        {isOpen && (
          <Portal>
            <div ref={refs.setFloating} className={getPrefix('tooltip')} style={floatingStyles}>
              <FloatingArrow ref={arrowRef} context={context} />
              {renderContent()}
            </div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};
export default Tooltip;
