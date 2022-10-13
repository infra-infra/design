import React, { FC, ReactElement } from 'react'
import {
    IconInfoCircleFill,
    IconCheckCircleFill,
    IconCloseCircleFill,
    IconExclamationCircleFill,
    IconLoading,
    IconClose
} from "@dekopon/icon";
import classNames from "../_util/classNames";

export type MessageType = 'info' | 'success' | 'error' | 'warning'|'loading'

export interface MessageProps {
    text: string;
    type: MessageType
}
const renderIcon = {
    info: IconInfoCircleFill,
    success: IconCheckCircleFill,
    error: IconCloseCircleFill,
    warning: IconExclamationCircleFill,
    loading: IconLoading,
};
const Message: FC<MessageProps> = (props: MessageProps) => {
    const { text, type } = props

    return (
        <div className="message" data-testid="test-message">
            <div className="message-content">
                <div className={classNames('icon',type)}>
                    {React.createElement(renderIcon[type])}
                </div>
                <div className="text">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default Message
