import React from 'react';
import { IconClose, IconInfo, IconCancel } from '@oc/icon';
import classNames from '../_util/classNames';
import getPrefix from '../_util/getPrefix';

interface AlertProps {
  children: React.ReactNode;
  className?: string;
  type?: 'info' | 'success' | 'warning' | 'danger';
}
const getIcon = {
  info: IconInfo,
  success: IconClose,
  warning: IconClose,
  danger: IconCancel,
};
function Alert({ children, className, type = 'info' }: AlertProps): JSX.Element {
  return (
    <div className={classNames(getPrefix('alert'), type && getPrefix(`alert-${type}`), className)}>
      {React.createElement(getIcon[type], { className: getPrefix(`alert-${type}-icon`) })}
      {children}
    </div>
  );
}

export default Alert;
