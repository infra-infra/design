import { type PropsWithChildren, type ReactNode, useRef, useState } from 'react';
import { IconButton, Space, Tooltip, useMessage } from '@oc/design';
import { IconCode, IconCopy } from '@oc/icon';

function CellCode(props: PropsWithChildren<any>) {
  const { children } = props;
  const ins = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState(false);
  const message = useMessage();
  return (
    <div ref={ins}>
      <Space>
        <Tooltip content="展开代码">
          <IconButton border onClick={() => setIsShow(!isShow)}>
            <IconCode />
          </IconButton>
        </Tooltip>
        <Tooltip content="复制代码">
          <IconButton
            onClick={async () => {
              const clipboardObj = navigator.clipboard;
              await clipboardObj.writeText(
                (ins.current?.querySelector('.language-js') as HTMLElement).innerText
              );
              message?.add({
                content: '复制成功',
                type: 'success',
              });
            }}
            border
          >
            <IconCopy />
          </IconButton>
        </Tooltip>
      </Space>
      <div
        style={{
          display: isShow ? 'block' : 'none',
        }}
      >
        {children}
      </div>
    </div>
  );
}

CellCode.Css = function CellCss({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
};
export default CellCode;
