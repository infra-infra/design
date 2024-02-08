'use client';

import { createRef, PropsWithChildren } from 'react';
import ConfigContext from '../_context/ConfigContext';
import MessagePortal from '../message/message';
import { IMessageRef } from '../message/useStore';

function ConfigProvider(
  props: PropsWithChildren<{ value: { getPrefix: (name: string) => string } }>
) {
  const messageRef = createRef<IMessageRef>();
  const { children, value } = props;

  return (
    <ConfigContext.Provider value={{ messageRef, ...value }}>
      <MessagePortal ref={messageRef} />
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigProvider };
