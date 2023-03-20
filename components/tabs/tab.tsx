import React from 'react';
import { css } from '@emotion/css';
import classNames from '../_util/classNames';

interface ButtonProps {
  icon?: React.ReactElement;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}
const iconCss = css`
  margin-right: 8px;
`;
const activeCss = css`
  color: var(--md-sys-color-primary);
  background-color: var(--md-sys-color-secondary-container);
  border-radius: 40px;
  font-weight: 700;

  i[data-icon] {
    font-variation-settings: 'FILL' 1;
  }
`;
const inactiveCss = css`
  color: var(--md-sys-color-on-surface-variant);
`;

function Tab(props: ButtonProps): JSX.Element {
  const { children, icon, active, onClick, className } = props;
  return (
    <div
      aria-selected={active}
      onClick={onClick}
      className={classNames(
        className,
        css({
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }),
        active ? activeCss : inactiveCss
      )}
    >
      {icon &&
        React.cloneElement(icon, {
          className: classNames([iconCss]),
        })}
      {children}
    </div>
  );
}

export default Tab;
