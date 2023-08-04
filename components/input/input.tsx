import type { ReactElement } from 'react';
import classNames from '../_util/classNames';
import getPrefix from '../_util/getPrefix';

interface InputType {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function Input(props: InputType): ReactElement {
  const { className, placeholder, value, onChange } = props;

  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type="input"
      className={classNames(getPrefix('input'), className)}
    />
  );
}

export default Input;
