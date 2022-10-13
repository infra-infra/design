import React, {FC, ReactElement, useEffect} from 'react'
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
    id: string;
    type: MessageType
    onClose: (id:string)=>void
}
const renderIcon = {
    info: IconInfoCircleFill,
    success: IconCheckCircleFill,
    error: IconCloseCircleFill,
    warning: IconExclamationCircleFill,
    loading: IconLoading,
};
const Notice: FC<MessageProps> = (props: MessageProps) => {
    const { text, type,onClose,id } = props
    useEffect(()=>{
        window.setTimeout(()=>onClose(id),3000)
    },[])
    return (
        <div className="message">
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

export default Notice
