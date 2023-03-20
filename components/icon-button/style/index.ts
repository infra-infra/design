import { css } from '@emotion/css';

export const style = {
  outlined: css`
    border: 1px solid var(--md-sys-color-outline);

    &:hover {
      background-color: var(--md-sys-color-surface-variant);
      color: var(--md-sys-color-primary);
      font-variation-settings: 'FILL' 1, 'wght' 700;
    }
  `,
  filled: css`
    &:hover {
      background: var(--md-sys-color-on-surface-variant-2);
      color: var(--md-sys-color-on-surface);

      [data-icon] {
        font-variation-settings: 'FILL' 1, 'wght' 600;
      }
    }
  `,
};
export const iconButtonStyle = css`
  width: 48px;
  height: 48px;
  border-radius: 32px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
