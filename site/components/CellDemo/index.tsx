import { css } from '@emotion/css';
import React from 'react';

export default function CellDemo({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={css`
        margin-top: 24px;
        padding: 48px;
        background-color: var(--bgColor-neutral-muted);
        border: 1px solid var(--borderColor-severe-muted);
        border-radius: var(--control-xsmall-size);
      `}
    >
      {children}
    </div>
  );
}
