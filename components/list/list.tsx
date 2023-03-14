import React, { ForwardRefRenderFunction, MouseEventHandler, useState } from 'react';

type VariantEnum = 'outlined' | 'elevated' | 'filled' | 'tonal' | 'text';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  variant?: VariantEnum;
}

const List: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = function Button(
  props: ButtonProps,
  ref
) {
  const { children } = props;

  return (
    <ul>
      {React.Children.map(children, (child) => React.cloneElement(child as React.ReactElement))}
    </ul>
  );
};

export default React.forwardRef(List);
