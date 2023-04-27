import '../styles/globals.css';
import React, { ReactNode, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from '../components/Layout'
import Header from '../components/Header'

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const AppMainBody = useRef(null);

  return (
    <>
      <Header/>
      <Layout className="transition-all duration-300" ref={AppMainBody}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </>
  )
}
