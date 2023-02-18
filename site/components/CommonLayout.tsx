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
                <header className='layout-header'>
                    <span>组件库文档</span>
                    {theme === 'dark' && <IconMoon className={'icon'} onClick={() => setThemeAction('light')}/>}
                    {theme === 'light' && <IconSunFill className={'icon'} onClick={() => setThemeAction('dark')}/>}
                </header>
            </Layout.Header>
            <Layout.Main>
                <div className='main'>
                    <Card className={'left'}>
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
                                {item.path}
                            </NavLink>
                        ))}
                    </Card>
                    <Card className='right'><Outlet/></Card>
                </div>
            </Layout.Main>
            <Layout.Footer>power by cc</Layout.Footer>
        </Layout>
    );
};
export default CommonLayout;
