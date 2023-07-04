import React, { FC, useEffect } from 'react';
import { IconClose } from '@oc/icon';
import classNames from '../_util/classNames';
// import { style } from './style';

export type MessageType = 'info' | 'success' | 'error' | 'warning' | 'loading';

export interface MessageProps {
  text: string;
  id: string;
  type: MessageType;
  onClose: (id: string) => void;
}

const renderIcon = {
  info: IconClose,
  success: IconClose,
  error: IconClose,
  warning: IconClose,
  loading: IconClose,
};
const Notice: FC<MessageProps> = (props: MessageProps) => {
  const { text, type, onClose, id } = props;
  useEffect(() => {
    window.setTimeout(() => onClose(id), 3000);
  }, []);
  return (
    <div className="style.message">
      <div className="message-content">
        {React.createElement(renderIcon[type], { className: classNames('icon', type) })}
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default Notice;
