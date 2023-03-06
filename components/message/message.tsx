import React from 'react';
import { createRoot } from 'react-dom/client';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Notice, { MessageType } from './notice';

export interface Notice {
  text: string;
  key: string;
  type: MessageType;
}

let seed = 0;
let messageInstance: Message | null = null;

const now = Date.now();
const getUuid = (): string => {
  const id = seed;
  seed += 1;
  return `MESSAGE_${now}_${id}`;
};
function addInstance(type: string, text: string) {
  if (messageInstance) {
    const { notices } = messageInstance.state;
    messageInstance.add({ type, text });
  } else {
    const div = document.createElement('div');
    div.setAttribute('class', 'notice-container');
    document.body.appendChild(div);
    createRoot(div).render(
      <Message
        ref={(instance) => {
          messageInstance = instance;
          messageInstance?.add({ type, text });
        }}
      />
    );
  }
}

class Message extends React.Component<any, any> {
  static success: (text: string) => void;

  static info: (text: string) => void;

  static warning: (text: string) => void;

  static error: (text: string) => void;

  static loading: (text: string) => void;

  constructor(props: any) {
    super(props);
    this.remove = this.remove.bind(this);
    this.state = {
      notices: [],
    };
  }

  add(noticeProps: any) {
    const id = getUuid();
    this.setState({ notices: [...this.state.notices, { key: id, ...noticeProps }] });
    return id;
  }

  remove(id: string) {
    setTimeout(() => {
      const newNotices = this.state.notices.filter((_: any) => _.key !== id);
      this.setState({ notices: newNotices });
    }, 100);
  }

  render() {
    const { notices } = this.state;
    return (
      <TransitionGroup component={null} className="oc">
        {notices.map(({ text, key, type, onClose }: any) => (
          <CSSTransition
            key={key}
            onExited={onClose}
            timeout={{
              enter: 100,
              exit: 300,
            }}
          >
            <Notice id={key} onClose={this.remove} type={type} text={text} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}
Message.success = function (text: string) {
  addInstance('success', text);
};
Message.info = function (text: string) {
  addInstance('info', text);
};
Message.warning = function (text: string) {
  addInstance('warning', text);
};
Message.error = function (text: string) {
  addInstance('error', text);
};
Message.loading = function (text: string) {
  addInstance('loading', text);
};
export default Message;
