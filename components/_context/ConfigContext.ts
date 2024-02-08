import { createContext, createRef } from 'react';
import { IMessageRef } from '../message/useStore';

const ConfigContext = createContext({
  messageRef: createRef<IMessageRef>(),
  prefix: 'cw',
  getPrefix: (name: string) => `cw-${name}`,
});

export default ConfigContext;
