import React from 'react';
import { css } from '@emotion/css';

export default function CellDescription(props: any) {
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
        {props.children}
      </div>
    </div>
  );
}
