import Head from 'next/head';
import { AppProps } from 'next/app';
import { ResetCSS } from '@dawangraoming/uikit';
import { GlobalStyle } from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Title - MAKE ME DYNAMIC PLEASE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ResetCSS />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
