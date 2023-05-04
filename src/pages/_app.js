import '../styles/globals.css';
import React, { ReactNode, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Card from '../components/card';
import Footer from '../components/footer';
import Main from '../components/main';
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const AppMainBody = useRef(null);

  return (
    <>
      <Header />
      <Main />
      <Layout className="transition-all duration-300" ref={AppMainBody}>
        <Component {...pageProps} key={router.route} />
      </Layout>
      <Footer />
    </>
  );
}
