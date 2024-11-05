import React from 'react';
import { css } from '@emotion/css';

const homeContainer = css`
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
`;

const welcomeTitle = css`
  font-size: 2.5rem;
  color: var(--fgColor-default);
  margin-bottom: 2rem;
  text-align: center;
`;

const section = css`
  background: var(--bgColor-default);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h2 {
    color: var(--fgColor-default);
    margin-bottom: 16px;
    font-size: 1.5rem;
  }
`;

const installCommand = css`
  background: var(--bgColor-muted);
  border-radius: 6px;
  padding: 16px;

  pre {
    margin: 0;
    overflow-x: auto;

    code {
      color: var(--fgColor-accent);
      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    }
  }
`;

const featureList = css`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 12px 0;
    font-size: 1.1rem;
    color: var(--fgColor-default);
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.3s ease;
    cursor: pointer;

    &:hover {
      color: var(--fgColor-accent);
    }
  }
`;

function HomePage() {
  return (
    <div className={homeContainer}>
      <h1 className={welcomeTitle}>欢迎使用 @oc/design 👋</h1>

      <div className={section}>
        <h2>快速开始</h2>
        <div className={installCommand}>
          <pre>
            <code>npm i @oc/design --registry=https://nexus.ooxo.cc/repository/npm-hosted/</code>
          </pre>
        </div>
      </div>

      <div className={section}>
        <h2>开始使用</h2>
        <ul className={featureList}>
          <li>📚 查看组件文档</li>
          <li>🎨 浏览示例</li>
          <li>⚡ 快速上手</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
