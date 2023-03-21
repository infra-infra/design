import { css } from '@emotion/css';

export const comment = css`
  display: flex;
  line-height: 1.5715;
  margin-top: 20px;
`;
export const avatarStyle = css`
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  position: relative;
  background-color: var(--color-fill-4);
  white-space: nowrap;
  color: var(--color-white);
  box-sizing: border-box;
  vertical-align: middle;
  width: 40px;
  height: 40px;
  font-size: 20px;
  flex-shrink: 0;
  margin-right: 12px;
  cursor: pointer;
  border-radius: 50%;
`;
export const container = css`
  background-color: var(--comment-background);
  border-radius: 18px;
  padding: 8px 12px;
`;
export const actionsStyle = css`
  margin-top: 3px;
  font-size: 13px;
  padding: 0 12px;
`;
export const contentStyle = css`
  font-size: 15px;
  color: var(--secondary-text);
`;
export const authorStyle = css`
  display: flex;
  align-items: center;
  color: var(--md-sys-color-on-surface);
  font-size: 14px;
  font-weight: 600;
`;
