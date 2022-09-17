import 'css/global.css';
import Head from 'next/head';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Title - MAKE ME DYNAMIC PLEASE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />;
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
