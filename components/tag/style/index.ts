import { css } from '@emotion/css';

export const tagStyle = css`
  border-radius: 8px;
  height: 40px;
  padding: 0 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const style = {
  elevated: css`
    background: var(--md-sys-color-surface-1);
    box-shadow: var(--md-sys-elevation-1);
    color: var(--md-sys-color-primary);
    line-height: 20px;
    font-weight: 500;
    font-size: 14px;
    transition: box-shadow 0.2s ease-in-out 0s;
    border: none;

    &:hover {
      //background-color: hsla(var(--md-sys-color-primary-hsl), 0.08);
      background: var(--md-sys-color-surface-2);
      box-shadow: var(--md-sys-elevation-2);
    }

    &:focus {
      box-shadow: var(--md-sys-elevation-2);
    }
  `,
  outlined: css`
    background-color: transparent;
    border: 1px solid var(--md-sys-color-outline);
    box-shadow: var(--md-sys-elevation-0);
    color: var(--md-sys-color-primary);

    &:hover {
      box-shadow: var(--md-sys-elevation-1);
    }

    &:active {
      box-shadow: var(--md-sys-elevation-1);
    }
  `,
  filled: css`
    box-shadow: var(--md-sys-elevation-0);
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
    border: none;

    &:hover {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)),
        var(--md-sys-color-primary);
    }

    &:active {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)),
        var(--md-sys-color-primary);
    }
  `,
  text: css`
    color: var(--md-sys-color-primary);
    background-color: transparent;
    border: none;

    &:hover {
      box-shadow: var(--md-sys-elevation-1);
    }

    &:active {
      background-color: hsla(var(--md-sys-color-primary-hsl), 0.12);
    }
  `,
  tonal: css`
    background-color: var(--md-sys-color-secondary-container);
    color: var(--md-sys-color-on-secondary-container);
    border: none;
    transition: background-color 0.2s cubic-bezier(0.3, 0, 0.8, 0.15);
    &:hover {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)),
        var(--md-sys-color-secondary-container);
      box-shadow: var(--md-sys-elevation-1);
    }
  `,
};
