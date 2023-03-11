import React from 'react';
import * as icons from '@oc/icon';
import { css } from '@emotion/css';

const iconStyle = css`
  font-size: 20px;
  margin: 10px;
  color: var(--primary-text);
`;
export default function () {
  return (
    <div>
      {Object.keys(icons).map((icon: any) => {
        return React.createElement((icons as any)[icon], { key: icon, className: iconStyle });
      })}
    </div>
  );
}
