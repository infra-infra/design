import { css } from '@emotion/css';

export const style = {
  backDrop: css`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    z-index: 1000;
    opacity: 1;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  `,
  container: css`
    background-color: var(--md-sys-color-surface);
    position: relative;
    display: flex;
    min-width: 280px;
    max-width: 560px;
    box-sizing: border-box;
    flex-direction: column;
    border: 1px solid var(--color-border);
    border-radius: 28px;
    box-shadow: 0 12px 28px 0 var(--shadow-2), 0 2px 4px 0 var(--shadow-1),
      inset 0 0 0 1px var(--shadow-inset);
    padding: 24px;
    background-clip: padding-box;
    overflow: hidden;
    margin-top: 80px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);

    .zzf-modal-header {
      color: var(--primary-text);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
      font-size: 1.25rem;
      margin-bottom: 16px;
    }

    .zzf-modal-footer {
      margin-top: 24px;
      padding: 0;
      text-align: right;
      border-radius: 0 0 5px 5px;
      border-top: 0 solid transparent;
      background-color: transparent;

      button {
        margin-left: 12px;
      }
    }

    .zzf-model-close {
      cursor: pointer;
      font-size: 24px;
      color: var(--color-text-1);

      &:hover {
        color: var(--color-text-3);
      }
    }

    .zzf-modal-content {
      padding: 20px;
    }

    .btn {
      position: absolute;
      padding-bottom: 10px;
      bottom: 0;
      text-align: center;
      width: 100%;
      cursor: default;
    }
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
