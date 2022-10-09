import React from 'react';
import classNames from '../_util/classNames';

interface InputType {
    className?: string;
    type?: string;
    autoFocus?: boolean;
    placeholder?: string;
    value?: string;
    onChange?: (value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input = (props: InputType) => {
    const {type = 'text', className, autoFocus = false, placeholder, value, onChange} = props;

    return (
        type === 'textarea' ? <textarea value={value}
                                        onChange={onChange}
                                        placeholder={placeholder}
                                        autoFocus={autoFocus} className={classNames('zzf-ipt', className)}
                                        rows={4}/> :
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                autoFocus={autoFocus}
                type={type}
                className={classNames('zzf-ipt', className)}
            />
    );
};

export default Input;
