import React from 'react';
import * as icons from '@oc/icon';


export default function () {
  return (
    <div>
      {Object.keys(icons).map((icon: any) =>{
        const Tag =(icons as any)[icon]
        return <Tag key={icon}></Tag>
      })}
    </div>
  );
}
