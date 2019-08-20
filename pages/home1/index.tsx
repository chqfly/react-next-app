import React from 'react';
import Head from 'next/head';
import style from './index.scss';
import { NextPage } from 'next';

const Home: NextPage = () => (
  <div className={style.homePage}>
    <Head>
      <title>home</title>
    </Head>

    <h2>home</h2>
    <a href="/user">index</a>
  </div>
);

export default Home;
