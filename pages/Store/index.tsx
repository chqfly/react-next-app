import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import delay from '@/utils';
import style from './index.scss';
type Props = {
  name: string;
};

const Store: NextPage<Props> = () => {
  useEffect(() => {
    const handleRouteChangeStart = (url: string): void => {
      console.log('start App is changing to: ', url);
    };

    const handleRouteChangeComplete = (url: string): void => {
      console.log('end App is changing to: ', url);
    };

    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  });

  return (
    <div>
      <Head>
        <title>Store</title>
      </Head>

      <div className={style.hero}>
        <h1 className={style.title}>Welcome to store!</h1>
        <p className={style.description}>
          To get started, edit <code>pages/store.js</code> and save to reload.
        </p>
        <div className={style.description}>
          <a href="/home">home</a>
        </div>
      </div>
    </div>
  );
};

Store.getInitialProps = async () => {
  await delay(200);
  return {
    name: 'fromProps'
  };
};

export default Store;
