import { PropsWithChildren } from 'react';
import ConfigContext from './ConfigContext';
import MessagePortal from '../message/message';

function ConfigProvider(props: PropsWithChildren<{ value: any }>) {
  const { children, value } = props;
  return (
    <ConfigContext.Provider value={value}>
      <MessagePortal ref={value.messageRef} />
      {children}
    </ConfigContext.Provider>
  );
}

export default ConfigProvider;
