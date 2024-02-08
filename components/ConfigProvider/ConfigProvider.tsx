'use client';

import { createRef, PropsWithChildren, useMemo } from 'react';
import ConfigContext from '../_context/ConfigContext';
import MessagePortal from '../message/message';
import { IMessageRef } from '../message/useStore';

function ConfigProvider(props: PropsWithChildren<{ value: { prefix: string } }>) {
  const { value, children } = props;

  const config = useMemo(
    () => ({
      prefix: value.prefix,
      getPrefix: (name: string) => `${value.prefix}-${name}`,
      messageRef: createRef<IMessageRef>(),
    }),
    [value]
  );

  return (
    <ConfigContext.Provider value={config}>
      <MessagePortal ref={config.messageRef} />
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigProvider };
