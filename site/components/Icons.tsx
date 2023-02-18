import React from 'react';
import * as icons from '@oc/icon';


export default function () {
  return (
    <div>
      {Object.keys(icons).map((icon: any) =>{
        return React.createElement((icons as any)[icon],{key:icon,className:"site-icon"})
      })}
    </div>
  );
}
