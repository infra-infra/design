import { PropsWithChildren, useEffect } from 'react';
import { Alert } from '../index';

function MessageSingle(props: PropsWithChildren<{ message: any; remove: any }>) {
  const { message, remove } = props;
  useEffect(() => {
    const timer = setTimeout(() => {
      remove(message.id);
    }, message.duration);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return <Alert>{message.content}</Alert>;
}

export default MessageSingle;
