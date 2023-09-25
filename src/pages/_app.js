import '../styles/globals.css';
import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { ThemeProvider } from '../context/ThemeContext';
import { IOMe, Connect, Utils } from "@iome/react-widget"
// import "iome-widget/src/styles/main.css"
let iomeObj = new IOMe("developerID", "AppSecret");

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const AppMainBody = useRef(null);

  useEffect(() => {
    async function __initIome() {
      try {
        await iomeObj.InitDev();
        await iomeObj.InitApp();
      }catch(e) {
        // handle error
      }
    }
    __initIome();
  },[])

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
