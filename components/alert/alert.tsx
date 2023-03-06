import React from 'react';
import {
  IconInfoCircleFill,
  IconCheckCircleFill,
  IconCloseCircleFill,
  IconExclamationCircleFill,
} from '@oc/icon';
import classNames from '../_util/classNames';

interface AlertProps {
  children: React.ReactNode;
  className?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}
const getIcon = {
  info: IconInfoCircleFill,
  success: IconCheckCircleFill,
  warning: IconExclamationCircleFill,
  error: IconCloseCircleFill,
};
function Alert({ children, className, type = 'info' }: AlertProps) {
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
