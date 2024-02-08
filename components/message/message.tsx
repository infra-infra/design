import { forwardRef, useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Portal } from '../portal';
import useStore from './useStore';
import ConfigContext from '../_context/ConfigContext';
import MessageSingle from './MessageSingle';

function MessagePortal(props: unknown, ref: any) {
  const { add, remove, state } = useStore();
  const { getPrefix } = useContext(ConfigContext);
  // eslint-disable-next-line no-param-reassign,react/destructuring-assignment
  if (!ref.current) {
    // eslint-disable-next-line no-param-reassign
    ref.current = {
      add,
      remove,
    };
  }
  return (
    state.length > 0 && (
      <Portal className={getPrefix('message')}>
        <AnimatePresence>
          {state.map((item) => (
            <motion.div
              className={getPrefix('message-item')}
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              key={item.id}
            >
              <MessageSingle remove={remove} message={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </Portal>
    )
  );
}

export default forwardRef(MessagePortal);
