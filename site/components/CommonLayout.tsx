import {NavLink, Outlet} from 'react-router-dom';
import React, {useState} from 'react';
import useMenu from './useMenu';
import {IconMoon, IconSunFill} from '@oc/icon'
import {Card, Layout} from '@oc/design';
import {css} from "@emotion/css";
import classNames from "../../components/_util/classNames";

const headerStyle = css`
  width: 100%;
  color: var(--accent);
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
]
`
const iconStyle = css`
  font-size: 22px;
  cursor: pointer;
  margin-left: 10px;
`

const mainStyle = css`
  width: 100%;
  display: grid;
  grid-template-columns:1fr 5fr;
  grid-column-gap: 20px;
  padding: 20px;
`
const navStyle = css`
  display: grid;
  grid-template-columns: 1fr;
`
const aStyle = css`
  padding: 8px 18px;
  transition-duration: var(--fds-duration-extra-extra-short-out);
  transition-timing-function: var(--fds-animation-fade-out);
  transition-property: opacity;
  border-radius: 8px;
  color: var(--primary-text);
  text-decoration: none;

  &[class~="active"] {
    color: var(--accent);
    font-weight: 600;
  }

  &:hover {
    background-color: var(--hover-overlay);
  }
`
const CommonLayout = () => {
    const list = useMenu();
    const [theme, setTheme] = useState('light');

    function setThemeAction(theme: string) {
        document.body.setAttribute('arco-theme', theme);
        document.querySelector('html')?.setAttribute('data-color-mode', theme);
        setTheme(theme);
    }

    return (
        <Layout>
            <Layout.Header>
                <header className={headerStyle}>
                    <span>组件库文档</span>
                    {theme === 'dark' && <IconMoon className={iconStyle} onClick={() => setThemeAction('light')}/>}
                    {theme === 'light' && <IconSunFill className={iconStyle} onClick={() => setThemeAction('dark')}/>}
                </header>
            </Layout.Header>
            <Layout.Main>
                <div className={mainStyle}>
                    <Card className={navStyle}>
                        <NavLink
                            className={({isActive}) => classNames(aStyle, isActive && 'active')}
                            to={'/icon'}
                        >
                            icon
                        </NavLink>
                        {list.map((item) => (
                            <NavLink
                                className={({isActive}) => classNames(aStyle, isActive && 'active')}
                                key={item.path}
                                to={item.path}
                            >
                                {item.path}
                            </NavLink>
                        ))}
                    </Card>
                    <Card><Outlet/></Card>
                </div>
            </Layout.Main>
            <Layout.Footer>power by cc</Layout.Footer>
        </Layout>
    );
};
export default CommonLayout;
