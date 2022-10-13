import React, { useState } from 'react';

const locales = {
  'zh-CN': {
    expand: '展开所有代码',
    collapse: '收起所有代码',
  },
  'en-US': {
    expand: 'Expand all code',
    collapse: 'Collapse all code',
  },
};

export default function CellDescription(props:any) {
  const [expand, setExpand] = useState(false);
  const t = locales['zh-CN'];

  function onHandleExpand() {
    const newExpand = !expand;
    const codeEle = document.querySelectorAll('.content-code-design');
    const codeTypeSwitchEle = document.querySelectorAll('.code-type-switch') || [];
    [...Array.from(codeEle), ...Array.from(codeTypeSwitchEle)].forEach((ele) => {
      if (newExpand) {
        ele.classList.add('show-all');
      } else {
        ele.classList.remove('show-all');
      }
    });
    setExpand(newExpand);
  }

  return (
    <div className="oc-description">
      <div className="oc-description-children">{props.children}</div>
    </div>
  );
}
