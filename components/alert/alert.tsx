import React, { ReactElement, useContext } from 'react';
import { IconCancel, IconCheck, IconInfo, IconWarning } from '@oc/icon';
import classNames from '../_util/classNames';
import ConfigContext from '../_context/ConfigContext';

interface AlertProps {
  children: React.ReactNode;
  className?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}

const getIcon = {
  info: IconInfo,
  success: IconCheck,
  warning: IconWarning,
  error: IconCancel,
};

function Alert({ children, className, type = 'info' }: AlertProps): ReactElement {
  const { getPrefix } = useContext(ConfigContext);
  return (
    <div className={classNames(getPrefix('alert'), type && getPrefix(`alert-${type}`), className)}>
      {React.createElement(getIcon[type], { className: getPrefix(`alert-${type}-icon`) })}
      {children}
    </div>
  );
}

export default Alert;
