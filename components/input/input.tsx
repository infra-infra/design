import React from 'react';
import classNames from '../_util/classNames';
import { input } from './style';

interface InputType {
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function Input(props: InputType): JSX.Element {
  const { type = 'text', className, placeholder, value, onChange } = props;

  return type === 'textarea' ? (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={classNames(input, className)}
      rows={4}
    />
  ) : (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      className={classNames(input, className)}
    />
  );
}

export default Input;
