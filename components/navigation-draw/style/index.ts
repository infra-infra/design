import { css } from '@emotion/css';

export const style = {
  container: css`
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    position: fixed;
    left: 0;
    top: 0;
    background-color: var(--md-sys-color-surface-1);
    width: 320px;
    height: 100vh;
    z-index: 6;
  `,
  mask: css`
    position: fixed;
    inset: 0;
    z-index: 5;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    background-color: rgba(0, 0, 0, 0.32);
    display: none;
  `,
  active: css`
    display: block;
  `,
  transition: css`
    &-enter,
    &-appear {
      transform: translateX(-100%);
    }

    &-enter-active,
    &-appear-active {
      transform: translateX(0);
      transition: transform 300ms ease-in-out;
    }

    &-enter-done {
      transform: translateX(0);
      transition: transform 300ms ease-in-out;
    }

    &-exit {
      transform: translateX(0);
    }

    &-exit-active {
      transform: translateX(-100%);
      transition: transform 300ms ease-in-out;
    }
  `,
};
