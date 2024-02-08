import { createContext, createRef } from 'react';

const ConfigContext = createContext({
  messageRef: createRef(),
  getPrefix: (name: string) => `cw-${name}`,
});

export default ConfigContext;
