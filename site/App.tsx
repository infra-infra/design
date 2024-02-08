import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { createElement, createRef, ReactElement } from 'react';
import CommonLayout from './components/CommonLayout';
import useMenu from './components/useMenu';
import ConfigProvider from '../components/_context/ConfigProvider';

// import IconDemo from './components/Icons';
function App(): ReactElement {
  const list = useMenu();
  return (
    <ConfigProvider
      value={{
        messageRef: createRef(),
        getPrefix: (name) => `cw-${name}`,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonLayout />}>
            <Route
              path="/"
              element={
                <div>
                  <h3 aria-label="查看所有快速访问项">欢迎使用👏</h3>
                  <pre>
                    <code>npm i @oc/design --registry=https://npm.zzfzzf.com</code>
                  </pre>
                </div>
              }
            />
            {list.map((item) => (
              <Route key={item.path} path={item.path} element={createElement(item.component)} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export { App };
