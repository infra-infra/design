import React from 'react';
import * as icons from '@oc/icon';
import { css } from '@emotion/css';

const iconStyle = css`
  font-size: 20px;
  margin: 10px;
  color: var(--md-sys-color-on-surface);

  &:hover {
    transform: scale(2);
    color: var(--md-sys-color-primary);
  }
`;
export default function Icons(): JSX.Element {
  return (
    <div>
      {Object.keys(icons).map((icon: any) =>
        React.createElement((icons as any)[icon], {
          key: icon,
          className: iconStyle,
        })
      )}
    </div>
  );
}
