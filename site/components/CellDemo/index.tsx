import { css } from '@emotion/css';
import React from 'react';

export default function CellDemo({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={css`
        margin-top: 24px;
        padding: 48px;
        background-color: var(--comment-background);
        border: 1px solid var(--divider);
        border-radius: 2px 2px 0 0;
        color: var(--primary-text);
      `}
    >
      {children}
    </div>
  );
}
