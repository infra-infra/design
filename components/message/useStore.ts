import { useState } from 'react';
import { nanoid } from 'nanoid';

export interface IMessage {
  id?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  content: string;
  duration?: number;
  onClose?: () => void;
}

export interface IMessageRef {
  add: (config: IMessage) => string;
  remove: (id: string) => void;
}

const useStore = () => {
  const [state, setState] = useState<IMessage[]>([]);
  return {
    state,
    add: (config: IMessage) => {
      const id = config.id || nanoid();
      setState((prev) => [...prev, { ...config, duration: config.duration || 3000, id }]);
      return id;
    },
    remove: (id: string) => {
      setState((prev) => [...prev].filter((item) => item.id !== id));
    },
  };
};
export default useStore;
