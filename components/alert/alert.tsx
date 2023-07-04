import React from 'react';
import { IconClose } from '@oc/icon';
import classNames from '../_util/classNames';
import getPrefix from '../_util/getPrefix';

interface AlertProps {
  children: React.ReactNode;
  className?: string;
  type?: 'default' | 'success' | 'warning' | 'error';
}
const getIcon = {
  default: IconClose,
  success: IconClose,
  warning: IconClose,
  error: IconClose,
};
function Alert({ children, className, type = 'default' }: AlertProps): JSX.Element {
  return (
    <div className={classNames(getPrefix('alert'), type && getPrefix(`alert-${type}`), className)}>
      {/* <span className={`zzf-alert-${type}-icon`}> */}
      {/*  {React.createElement(getIcon[type], { className: 'zzf-alert-icon' })} */}
      {/* </span> */}
      {children}
    </div>
  );
}

export default Alert;
