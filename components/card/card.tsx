import React, { ReactNode } from 'react';
import classNames from '../_util/classNames';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  classNameWrap?: string;
  title?: ReactNode;
}

function Card({ children, title, className, classNameWrap }: CardProps) {
  return (
    <section className={classNames('zzf-card', classNameWrap)}>
      {title && <div className={classNames('zzf-card-header')}>{title}</div>}
      <section className={classNames('zzf-card-body', className)}>{children}</section>
    </section>
  );
}

export default Card;
