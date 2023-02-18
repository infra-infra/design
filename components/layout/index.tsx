import Footer from './Footer';
import Main from './Main';
import Header from './Header';
import Basic, { BasicProps } from './Basic';
import React from 'react';

interface LayoutType extends React.FC<BasicProps> {
  children: React.ReactNode;
  Header: typeof Header;
  Footer: typeof Footer;
  Main: typeof Main;
}

const Layout = Basic as LayoutType;

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Main = Main;

export { Layout };
