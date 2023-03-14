import { ReactNode } from 'react';
import classNames from '../_util/classNames';
import { card, style } from './style';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'outlined' | 'elevated' | 'filled';
}

function Card({ children, variant = 'filled', className }: CardProps): JSX.Element {
  return <section className={classNames(card, style[variant], className)}>{children}</section>;
}

export default Card;
