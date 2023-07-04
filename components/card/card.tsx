import { ReactNode } from 'react';
import classNames from '../_util/classNames';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'outlined' | 'elevated' | 'filled';
}

function Card({ children, variant = 'filled', className }: CardProps): JSX.Element {
  return (
    <section className={classNames('ccw-card', `ccw-card-${variant}`, className)}>
      {children}
    </section>
  );
}

export default Card;
