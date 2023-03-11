import { ReactNode } from 'react';
import classNames from '../_util/classNames';
import { card, style } from './style';

interface CardProps {
  children: ReactNode;
  variant?: 'outlined' | 'elevated' | 'filled';
}

function Card({ children, variant = 'filled' }: CardProps): JSX.Element {
  return <section className={classNames(card, style[variant])}>{children}</section>;
}

export default Card;
