import React from 'react';
import * as icons from '@dekopon/icon';


export default function () {
  return (
    <div>
      {Object.keys(icons).map(icon =>{
        // @ts-ignore
        const Tag =icons[icon]
        return <Tag></Tag>
      })}
    </div>
  );
}
