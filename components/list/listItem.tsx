import React from 'react';
import { css } from '@emotion/css';
import classNames from '../_util/classNames';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}
const item = css`
  padding: 12px 0;
  display: flex;
  width: 100%;
  align-items: center;
`;
function ListItem(props: ButtonProps): JSX.Element {
  const { children, className, active, onClick } = props;
  return (
    <li onClick={onClick} className={classNames(className, item)}>
      {children}
    </li>
  );
}

export default ListItem;
