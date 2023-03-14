import React, { useState } from 'react';
import { css } from '@emotion/css';
import classNames from '../_util/classNames';

interface TabsProps {
  children: React.ReactNode;
  onChange?: (key: string) => void;
  className: string;
}

function Tabs(props: TabsProps): JSX.Element {
  const { children, onChange, className } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  function handleClick(idx: number, key: string): void {
    setActiveIndex(idx);
    onChange?.(key);
  }

  return (
    <div
      className={classNames(
        css({
          display: 'flex',
          backgroundColor: 'var(--md-sys-color-surface-1)',
          height: '48px',
          borderRadius: '40px',
        }),
        className
      )}
    >
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement, {
          active: index === activeIndex,
          onClick: () => handleClick(index, (child as React.ReactElement)?.key as string),
        })
      )}
    </div>
  );
}

export default Tabs;
