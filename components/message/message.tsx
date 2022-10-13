import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { TransitionGroup } from 'react-transition-group'
import Message, { MessageType } from './asd'
import {Portal, PortalContext} from "../portal";

export interface MessageApi {
  info: (text: string) => void;
  success: (text: string) => void;
  warning: (text: string) => void;
  error: (text: string) => void;
  loading: (text: string) => void;
}

export interface Notice {
  text: string;
  key: string;
  type: MessageType;
}

let seed = 0
const now = Date.now()
const getUuid = (): string => {
  const id = seed
  seed += 1
  return `MESSAGE_${now}_${id}`
}

let add: (notice: Notice) => void

export const MessageContainer = () => {
  const [notices, setNotices] = useState<Notice[]>([])
  const timeout = 3 * 10000
  const maxCount = 10

  const remove = (notice: Notice) => {
    const { key } = notice

    setNotices((prevNotices) => (
        prevNotices.filter(({ key: itemKey }) => key !== itemKey)
    ))
  }

  add = (notice: Notice) => {

    setNotices((prevNotices) => [...prevNotices, notice])
    setTimeout(() => {
      remove(notice)
    }, timeout)
  }

  useEffect(() => {
    if (notices.length > maxCount) {
      const [firstNotice] = notices
      remove(firstNotice)
    }
  }, [notices])

  return (
      <Portal>
        <div className="message-container">
          <TransitionGroup>
            {
              notices.map(({ text, key, type }) => (
                  <Message type={type} text={text} />
              ))
            }
          </TransitionGroup>
        </div>
      </Portal>

  )
}

let el = document.querySelector('#message-wrapper')
if (!el) {
  el = document.createElement('div')
  el.className = 'message-wrapper'
  el.id = 'message-wrapper'
  document.body.append(el)
}

ReactDOM.render(
    <Portal>
      <MessageContainer/>
    </Portal>,
    el
)

const api: MessageApi = {
  info: (text) => {
    add({
      text,
      key: getUuid(),
      type: 'info'
    })
  },
  success: (text) => {
    add({
      text,
      key: getUuid(),
      type: 'success'
    })
  },
  warning: (text) => {
    add({
      text,
      key: getUuid(),
      type: 'warning'
    })
  },
  error: (text) => {
    add({
      text,
      key: getUuid(),
      type: 'error'
    })
  },
  loading: (text) => {
    add({
      text,
      key: getUuid(),
      type: 'loading'
    })
  }
}

export default api
