import { css } from '@emotion/css';

export const iconButtonStyle = css`
  width: 48px;
  height: 48px;
  border-radius: 32px;
  cursor: pointer;
  border: 1px solid var(--md-sys-color-outline);
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: var(--md-sys-color-surface-variant);
    color: var(--md-sys-color-primary);
  }
`;
