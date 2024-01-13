import React, { forwardRef } from 'react';

interface InputType {
  className?: string;
  placeholder?: string;
  value?: string;
  autoFocus?: boolean;
  onChange?: (value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Tree = forwardRef<HTMLInputElement, InputType>((props, ref) => {
  const { className, placeholder, value, onChange, autoFocus } = props;

  return <div>111</div>;
});

export default Tree;
