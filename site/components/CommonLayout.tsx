import {NavLink, Outlet} from 'react-router-dom';
import React, {useState} from 'react';
import useMenu from './useMenu';
import {IconMoon, IconSunFill} from '@oc/icon'
import {Card, Layout} from '@oc/design';

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
                <header>
                    组件库文档
                    {theme === 'dark' && <IconMoon className={'icon'} onClick={() => setThemeAction('light')}/>}
                    {theme === 'light' && <IconSunFill className={'icon'} onClick={() => setThemeAction('dark')}/>}
                </header>
            </Layout.Header>
            <Layout.Content>
                <Layout.Center>
                    <div>
                        <NavLink
                            className={({isActive}) => (isActive ? 'active' : '')}
                            to={'/icon'}
                        >
                            icon
                        </NavLink>
                        {list.map((item) => (
                            <NavLink
                                className={({isActive}) => (isActive ? 'active' : '')}
                                key={item.path}
                                to={item.path}
                            >
                                -{item.path}
                            </NavLink>
                        ))}
                    </div>
                    <Card><Outlet/></Card>
                </Layout.Center>
            </Layout.Content>
            <Layout.Footer>power by cc</Layout.Footer>
        </Layout>
    );
};
export default CommonLayout;
