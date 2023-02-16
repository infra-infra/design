import React, { ReactNode } from 'react';
import classNames from '../_util/classNames';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  classNameWrap?: string;
  title?: ReactNode;
}

const Card = ({ children, title, className,classNameWrap }:CardProps) => {
  return (
    <section className={classNames('zzf-card',classNameWrap)}>
      {title && (
        <title className={classNames('zzf-card-header')}>
            {title}
        </title>
      )}
      <section className={classNames('zzf-card-body',className)}>
        {children}
      </section>
    </section>
  );
};

export default Card;
