import { NavLink, Outlet } from 'react-router-dom';
import React,{ useState } from 'react';
import useMenu from './useMenu';
import {IconMoon,IconSunFill} from '@dekopon/icon'
import { Layout } from '@dekopon/design';

const CommonLayout = () => {
  const list = useMenu();
  const [theme, setTheme] = useState('light');
  function setThemeAction(theme: string) {
    document.body.setAttribute('arco-theme', theme);
    document.querySelector('html')?.setAttribute('data-color-mode', theme);
    setTheme(theme);
  }
  return (
    <Layout className='site'>
      <Layout.Header className='container'>
        <header className='header'>
          组件库文档
          {theme === 'dark' && <IconMoon className={'icon'} onClick={() => setThemeAction('light')} />}
          {theme === 'light' && <IconSunFill className={'icon'} onClick={() => setThemeAction('dark')} />}
        </header>
      </Layout.Header>
      <Layout.Content className={'container'}>
        <Layout.Aside>
          <ul className={'nav'}>
              <li>
                  <NavLink
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      to={'/icon'}
                  >
                      icon
                  </NavLink>
              </li>
            {list.map((item) => (
              <li key={item.path}>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  key={item.path}
                  to={item.path}
                >
                  {item.path}
                </NavLink>
              </li>
            ))}
          </ul>
        </Layout.Aside>
        <Layout.Center className={'main'}>
          <Outlet />
        </Layout.Center>
      </Layout.Content>
      <Layout.Footer>power by cc</Layout.Footer>
    </Layout>
  );
};
export default CommonLayout;
