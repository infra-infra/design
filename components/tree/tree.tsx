import React, { forwardRef } from 'react';
import TreeNode from './TreeNode';

interface InputType {
  className?: string;
  placeholder?: string;
  value?: string;
  treeData?: any[];
  onChange?: (value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Tree = forwardRef<HTMLInputElement, InputType>((props, ref) => {
  const { treeData = [], placeholder, value, onChange, autoFocus } = props;

  return (
    <div>
      {treeData.map((item) => (
        <TreeNode data={item} key={item.id} />
      ))}
    </div>
  );
});

export default Tree;
