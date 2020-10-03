import React from 'react';

import Head from 'next/head';

import Header from '#/site/Header';
import Footer from '#/site/Footer';

import { assetsSiteFolder, siteName } from 'config/app.json';
import { getLocale } from 'utils';

interface IProps {
  pagetitle: string;
  afterHeader?: React.ReactNode;
  children?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ pagetitle, afterHeader, children }) => {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pagetitle} | {siteName}</title>

        <link rel="stylesheet" href={`${assetsSiteFolder}css/styles.css`} />
        <link rel="stylesheet" href={`${assetsSiteFolder}css/ext_styles.css`} />
      </Head>

      <Header>{afterHeader}</Header>

      {children || (
        <div className="container">
          <h1>{pagetitle}</h1>
          <p>{getLocale('section_is_development')}</p>
        </div>
      )}

      <Footer />
    </>
  )
}

export default Layout;
