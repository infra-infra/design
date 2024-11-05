import { type PropsWithChildren, type ReactNode, useRef, useState } from 'react';
import { IconButton, Space, Tooltip, useMessage } from '@oc/design';
import { IconCode, IconCopy } from '@oc/icon';
import classNames from 'components/_util/classNames';
import { css } from '@emotion/css';

const codeBlockStyles = css({
  position: 'relative',
  margin: '16px 0',
  padding: '16px',
  borderRadius: '8px',
  transition: 'all 0.3s ease',

  '.code-actions': {
    justifyContent: 'flex-end',
    marginBottom: '12px',
    opacity: 0.6,
    transition: 'opacity 0.2s ease',
  },

  '&:hover .code-actions': {
    opacity: 1,
  },

  '.code-content': {
    overflow: 'hidden',
    transition: 'max-height 0.3s ease',
  },

  pre: {
    margin: 0,
    padding: '12px',
    backgroundColor: '#ffffff',
    borderRadius: '6px',
    border: '1px solid #e1e4e8',
    fontSize: '14px',
    lineHeight: 1.6,
    overflow: 'auto',
  },
});

function CellCode(props: PropsWithChildren<any>) {
  const { children } = props;
  const ins = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState(false);
  const message = useMessage();

  return (
    <div ref={ins} className={codeBlockStyles}>
      <Space className="code-actions">
        <Tooltip content="展开代码">
          <IconButton 
            border 
            onClick={() => setIsShow(!isShow)}
            className={css({
              '&:hover': {
                backgroundColor: '#e1e4e8',
              }
            })}
          >
            <IconCode />
          </IconButton>
        </Tooltip>
        <Tooltip content={<span className={css({
          whiteSpace: 'nowrap',
        })}>复制代码</span>}>
          <IconButton
            border
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
            className={css({
              '&:hover': {
                backgroundColor: '#e1e4e8',
              }
            })}
          >
            <IconCopy />
          </IconButton>
        </Tooltip>
      </Space>
      <div 
        className={classNames(
          'code-content',
          css({
            maxHeight: isShow ? '1000px' : '0',
          })
        )}
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
