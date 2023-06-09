import '../styles/globals.css';
import React, { ReactNode, useRef, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { ThemeProvider } from '../context/ThemeContext';
import "iome-widget/src/styles/main.css"

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const AppMainBody = useRef(null);

  return (
    <>
      <ThemeProvider>
        <Layout className="transition-all duration-300 font-[Poppins]" ref={AppMainBody}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
