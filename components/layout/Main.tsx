import React from 'react';
import classNames from '../_util/classNames';

interface SidebarProps {
  className?: string;
  children: React.ReactNode;
}
const Main: React.FC<SidebarProps> = ({ children, className }) => (
  <main className={classNames('zzf-layout-center', className)}>{children}</main>
);

export default Main;
