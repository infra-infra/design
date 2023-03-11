import React from 'react';
import classNames from '../_util/classNames';
import { style } from './style';

interface ButtonProps {
  children: React.ReactNode;
}

const Space: React.FC<ButtonProps> = ({ children }) => (
  <div className={classNames(style)}>{children}</div>
);

export default Space;
