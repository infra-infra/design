import { createContext, createRef } from 'react';
import { IMessageRef } from '../message/useStore';

const ConfigContext = createContext({
  messageRef: createRef<IMessageRef>(),
  getPrefix: (name: string) => `cw-${name}`,
});

export default ConfigContext;
