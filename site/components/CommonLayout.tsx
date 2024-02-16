import { NavLink, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { IconMoon, IconSun } from '@oc/icon';
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
        <NavLink className={({ isActive }) => classNames(isActive && 'active')} to="/">
          组件库文档
        </NavLink>
        {theme === 'dark' && (
          <IconMoon className={iconStyle} onClick={() => setThemeAction('light')} />
        )}
        {theme === 'light' && (
          <IconSun className={iconStyle} onClick={() => setThemeAction('dark')} />
        )}
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
      <div>power by cc</div>
    </>
  );
}

export default CommonLayout;
