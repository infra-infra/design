import { css } from '@emotion/css';

export const style = {
  tooltip: css`
    padding: 12px;
    background-color: var(--md-sys-color-inverse-surface);
    font-size: 14px;
    border-radius: 8px;
    color: var(--md-sys-color-inverse-on-surface);
    line-height: 1.5715;
    box-shadow: var(--md-sys-elevation-3);
    transition-property: opacity;
    transition-duration: var(--fds-duration-extra-extra-short-in);
    transition-timing-function: var(--fds-animation-fade-in);
  `,
  transition: css`
    &-enter {
      opacity: 0;
      transform: scale(0.6);
    }

    &-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 500ms ease-in;
    }

    &-exit {
      opacity: 1;
    }

    &-exit-active {
      opacity: 0;
      transform: scale(0.8);
      transition: opacity 500ms ease-in;
    }
  `,
};
