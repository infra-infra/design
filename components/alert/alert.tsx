import React from 'react';
import { IconClose } from '@oc/icon';
import classNames from '../_util/classNames';

interface AlertProps {
  children: React.ReactNode;
  className?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}
const getIcon = {
  info: IconClose,
  success: IconClose,
  warning: IconClose,
  error: IconClose,
};
function Alert({ children, className, type = 'info' }: AlertProps): JSX.Element {
  return (
    <div className={classNames('zzf-alert', type && `zzf-alert-${type}`, className)}>
      <span className={`zzf-alert-${type}-icon`}>
        {React.createElement(getIcon[type], { className: 'zzf-alert-icon' })}
      </span>
      {children}
    </div>
  );
}

export default Alert;
