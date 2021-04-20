import createCache from '@emotion/cache';
import { CacheProvider, Theme, ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import { PageLoading } from '@/components';
import { wrapper } from '@/redux';
import nextI18NextConfig from '../../next-i18next.config.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.scss';

const theme: Theme = {
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

interface IMyAppStates {
  isRouteChanging: boolean;
  loadingKey: number;
}

const initMyAppStates: IMyAppStates = {
  isRouteChanging: false,
  loadingKey: 0,
};

const cache = createCache({ key: 'wang' });

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const [state, setState] = useState<IMyAppStates>(initMyAppStates);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey + 1,
      }));
    };

    const handleRouteChangeEnd = () => {
      /* TODO: Support Google Analytics
      if (window && process.env.GA_MEASUREMENT_ID) {
        window.gtag('config', process.env.GA_MEASUREMENT_ID, {
          page_path: url,
        });
      }
      */
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeEnd);
    router.events.on('routeChangeError', handleRouteChangeEnd);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeEnd);
      router.events.off('routeChangeError', handleRouteChangeEnd);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#03103b" />
        <meta name="description" content="맑은혈관연구소" />
        <meta httpEquiv="X-UA-Compatible" content="chrome=1" />
        <title>UdongBot</title>
      </Head>
      <PageLoading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default wrapper.withRedux(appWithTranslation(MyApp, nextI18NextConfig));
