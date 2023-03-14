import { css } from '@emotion/css';

export const style = {
  container: css`
    position: fixed;
    left: 0;
    top: 0;
    background-color: var(--md-sys-color-surface-1);
    width: 80px;
    height: 100vh;
  `,
  transition: css`
    &-enter {
      opacity: 0;
      transform: scale(0.9);
    }

    &-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    &-exit {
      opacity: 1;
    }

    &-exit-active {
      opacity: 0;
      transform: scale(0.9);
      transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }
  `,
};
