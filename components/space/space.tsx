import React from 'react';
import classNames from '../_util/classNames';
// import { style } from './style';

interface SpaceProps {
  children: React.ReactNode;
}

function Space({ children }: SpaceProps): JSX.Element {
  return <div className={classNames('ccw-space')}>{children}</div>;
}

export default Space;
