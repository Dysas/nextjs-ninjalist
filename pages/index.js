import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>
          Amet do nulla nulla labore aute quis eiusmod nisi. Elit pariatur eiusmod culpa enim. Consequat in incididunt
          esse excepteur nulla pariatur nostrud sit minim enim reprehenderit labore in.
        </p>
        <p className={styles.text}>
          Amet do nulla nulla labore aute quis eiusmod nisi. Elit pariatur eiusmod culpa enim. Consequat in incididunt
          esse excepteur nulla pariatur nostrud sit minim enim reprehenderit labore in.
        </p>
        <Link href="ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}

export default Home;
