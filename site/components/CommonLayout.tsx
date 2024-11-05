import { NavLink, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { css } from '@emotion/css';
import classNames from '../../components/_util/classNames';
import useMenu from './useMenu';

const headerStyle = css`
  width: 100%;
  color: var(--fgColor-default);
  position: fixed;
  top: 0;
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bgColor-default);
]
`;
const iconStyle = css`
  font-size: 22px;
  cursor: pointer;
  margin-left: 10px;
`;

const mainStyle = css`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-column-gap: 20px;
  padding: 60px 20px 20px;
`;
const navStyle = css`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 60px;
`;
const aStyle = css`
  height: 40px;
  padding: 8px 18px;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-property: opacity;
  border-radius: 8px;
  color: var(--fgColor-default);
  text-decoration: none;

  &[class~='active'] {
    background-color: var(--bgColor-accent-muted);
    color: var(--fgColor-accent);
    font-weight: 600;
  }

  &:hover {
    background-color: var(--bgColor-accent-muted);
  }
`;
const footerStyle = css`
  text-align: center;
  padding: 24px;
  color: var(--fgColor-muted);
  font-size: 0.875rem;
  border-top: 1px solid var(--borderColor-default);
`;

const logoStyle = css`
  font-size: 20px;
  font-weight: 600;
  color: var(--fgColor-default);
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    color: var(--fgColor-accent);
    transform: scale(1.02);
  }

  // 可以添加 logo 图标
  &::before {
    content: '📚'; // 或者使用其他图标
    margin-right: 8px;
    font-size: 24px;
  }
`;

function CommonLayout() {
  const list = useMenu();
  const [theme, setTheme] = useState('light');

  function setThemeAction(theme: string) {
    document.querySelector('html')?.setAttribute('data-color-mode', theme);
    setTheme(theme);
  }

  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-color-mode', 'auto');
    document.querySelector('html')?.setAttribute('data-dark-theme', 'dark');
    document.querySelector('html')?.setAttribute('data-light-theme', 'light');
  }, []);
  return (
    <>
      <header className={headerStyle}>
        <NavLink className={({ isActive }) => classNames(logoStyle, isActive && 'active')} to="/">
          组件库文档
        </NavLink>
        {theme === 'dark' && <Moon className={iconStyle} onClick={() => setThemeAction('light')} />}
        {theme === 'light' && <Sun className={iconStyle} onClick={() => setThemeAction('dark')} />}
      </header>
      <div className={mainStyle}>
        <div>
          <div className={navStyle}>
            {list.map((item) => (
              <NavLink
                className={({ isActive }) => classNames(aStyle, isActive && 'active')}
                key={item.path}
                to={item.path}
              >
                {item.path}
              </NavLink>
            ))}
          </div>
        </div>
        <Outlet />
      </div>
      <footer className={footerStyle}>power by cc</footer>
    </>
  );
}

export default CommonLayout;
