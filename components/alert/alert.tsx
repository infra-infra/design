import React, { ReactElement, useContext } from 'react';
import { Info, TriangleAlert, BadgeAlert, CircleX } from 'lucide-react';
import classNames from '../_util/classNames';
import ConfigContext from '../_context/ConfigContext';

interface AlertProps {
  children: React.ReactNode;
  className?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}

const getIcon = {
  info: Info,
  success: BadgeAlert,
  warning: TriangleAlert,
  error: CircleX,
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
