import React, { PropsWithChildren } from 'react';
import { css } from '@emotion/css';

export default function CellDescription(props: PropsWithChildren<any>) {
  const { children } = props;
  return (
    <div
      className={css`
        display: flex;
        align-items: flex-end;
      `}
    >
      <div
        className={css`
          flex: 1;
        `}
      >
        {children}
      </div>
    </div>
  );
}
