import React from 'react';
import { css } from '@emotion/css';
import classNames from '../_util/classNames';

type IconType = React.FunctionComponent<{ className: string }>;

interface ButtonProps {
  icon?: IconType;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const activeCss = css`
  color: var(--md-sys-color-primary);
  background-color: var(--md-sys-color-secondary-container);
  border-radius: 40px;
`;
const inactiveCss = css`
  color: var(--md-sys-color-on-surface-variant);
`;
function Tab(props: ButtonProps): JSX.Element {
  const { children, icon, active, onClick, className } = props;
  return (
    <div
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
        React.createElement(icon, {
          className: classNames([
            css({
              fontSize: '24px',
            }),
            active ? activeCss : inactiveCss,
          ]),
        })}
      {children}
    </div>
  );
}

export default Tab;
