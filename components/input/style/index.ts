import { css } from '@emotion/css';

export const input = css`
  min-height: 56px;
  font-size: 14px;
  line-height: 20px;
  color: var(--primary-text);
  vertical-align: middle;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid var(--md-sys-color-outline);
  border-radius: 4px;
  outline: none;
  width: 100%;
  transition: border 0.2s ease 0s, box-shadow 0.2s ease 0s;
  caret-color: var(--md-sys-color-primary);
  padding: 15px 13px;

  &-round {
    border-radius: 50px;
  }

  &:hover {
  }

  &:focus,
  &:active {
    border: 2px solid var(--md-sys-color-primary);
  }
`;
