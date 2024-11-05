import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { createElement, ReactElement } from 'react';
import { ConfigProvider } from '@oc/design';
import CommonLayout from './components/CommonLayout';
import useMenu from './components/useMenu';
import HomePage from './components/HomePage';

function App(): ReactElement {
  const list = useMenu();
  return (
    <ConfigProvider
      value={{
        prefix: 'cw',
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonLayout />}>
            <Route path="/" element={<HomePage />} />
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
