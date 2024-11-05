import React, { CSSProperties } from 'react';
import classNames from '../_util/classNames';

type Align = 'start' | 'end' | 'center' | 'baseline';
type Direction = 'vertical' | 'horizontal';
type Size = 'small' | 'middle' | 'large' | number;

interface SpaceProps {
  children: React.ReactNode;
  align?: Align;
  className?: string;
  direction?: Direction;
  size?: Size | [Size, Size];
  split?: React.ReactNode;
  style?: CSSProperties;
  wrap?: boolean;
}

function Space({ 
  children,
  align,
  className,
  direction = 'horizontal',
  size = 'small',
  split,
  style,
  wrap = false,
}: SpaceProps): JSX.Element {
  const classes = classNames(
    'ccw-space',
    {
      [`ccw-space-${direction}`]: direction,
      [`ccw-space-align-${align}`]: align,
      'ccw-space-wrap': wrap,
    },
    className
  );

  const items = React.Children.toArray(children).filter(child => child !== null && child !== undefined);

  return (
    <div className={classes} style={style}>
      {items.map((child, i) => (
        <React.Fragment key={i}>
          {i > 0 && split && <span className="ccw-space-split">{split}</span>}
          <div className="ccw-space-item">{child}</div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Space;
