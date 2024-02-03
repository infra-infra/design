import React, { forwardRef } from 'react';
import TreeNode from './TreeNode';

interface InputType {
  treeData?: any[];
}

// eslint-disable-next-line react/display-name
const Tree = forwardRef<HTMLInputElement, InputType>((props, ref) => {
  const { treeData = [] } = props;

  return (
    <div>
      {treeData.map((item) => (
        <TreeNode data={item} key={item.id} />
      ))}
    </div>
  );
});

export default Tree;
