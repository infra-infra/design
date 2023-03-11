import { css } from '@emotion/css';

export const card = css`
  border-radius: 12px;
  padding: 16px;
`;
export const style = {
  outlined: css`
    background-color: var(--md-sys-color-surface);
    border: 1px solid var(--md-sys-color-outline);
    &:hover {
      border-color: var(--md-sys-color-outline);
      opacity: 0.92;
    }
  `,
  elevated: css`
    border: 1px solid var(--md-sys-color-outline-variant);
    background-color: var(--md-sys-color-surface-1);
    box-shadow: var(--md-sys-elevation-2);
  `,
  filled: css`
    background-color: var(--md-sys-color-surface-variant);
    border: 1px solid var(--md-sys-color-outline-variant);
  `,
};
