import React, { FC, useEffect } from 'react';
import { X } from 'lucide-react';
import classNames from '../_util/classNames';

export type MessageType = 'info' | 'success' | 'error' | 'warning' | 'loading';

export interface MessageProps {
  text: string;
  id: string;
  type: MessageType;
  onClose: (id: string) => void;
}

const renderIcon = {
  info: X,
  success: X,
  error: X,
  warning: X,
  loading: X,
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
