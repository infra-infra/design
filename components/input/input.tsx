import React, { forwardRef } from 'react';
import classNames from '../_util/classNames';
import getPrefix from '../_util/getPrefix';

interface InputType {
  className?: string;
  placeholder?: string;
  value?: string;
  autoFocus?: boolean;
  onChange?: (value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputType>((props, ref) => {
  const { className, placeholder, value, onChange, autoFocus } = props;

  return (
    <input
      ref={ref}
      autoFocus={autoFocus}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type="input"
      className={classNames(getPrefix('input'), className)}
    />
  );
});

export default Input;
